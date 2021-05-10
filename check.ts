/*
 * Script to search for writing & formatting violations and other mistakes.
 * Copyright (C) 2021  Michael Federczuk
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import chalk from "chalk";
import { PathLike, readdirSync, readFileSync, statSync } from "fs";
import markdownlint from "markdownlint";
import { normalize as normalizePath } from "path";
import rulesSource from "./check_rules";

//#region utils ===================================================================================================== //

declare global {
	interface Array<T> {
		count(value: T): number;
		reversed(): T[];
	}

	interface String {
		removeSuffix(suffix: string): string;
		removeSuffix(suffix: string): string;
		removePrefixSuffix(prefix: string, suffix: string): string;
		reduce<T>(callbackfn: (previousValue: T, currentChar: string, currentIndex: number, string: string) => T,
		          initialValue: T): T;
		reduceRight<T>(callbackfn: (previousValue: T, currentChar: string, currentIndex: number, string: string) => T,
		               initialValue: T): T;
		count(char: string): number;
		reversed(): string;
	}
}

Array.prototype.count = function<T>(this: T[], countValue: T): number {
	return this.reduce((count, currentValue) => {
		return count + (currentValue === countValue ? 1 : 0);
	}, 0);
}
Array.prototype.reversed = function<T>(this: T[]): T[] {
	return this.reduceRight((reversed, value) => {
		reversed.push(value);
		return reversed;
	}, [] as T[]);
}

String.prototype.removeSuffix = function(this: string, suffix: string): string {
	if(this.endsWith(suffix)) {
		return this.substring(0, this.length - suffix.length);
	}
	return this;
}
String.prototype.reduce = function<T>(this: string,
                                      callbackfn: (previousValue: T,
                                                   currentChar: string,
                                                   currentIndex: number,
                                                   string: string) => T,
                                      initialValue: T): T {

	let accumulator = initialValue;

	for(let i = 0; i < this.length; ++i) {
		accumulator = callbackfn(accumulator, this[i], i, this);
	}

	return accumulator;
}
String.prototype.reduceRight = function<T>(this: string,
                                           callbackfn: (previousValue: T,
                                                        currentChar: string,
                                                        currentIndex: number,
                                                        string: string) => T,
                                           initialValue: T): T {

	let accumulator = initialValue;

	for(let i = this.length - 1; i >= 0; --i) {
		accumulator = callbackfn(accumulator, this[i], i, this);
	}

	return accumulator;
}
String.prototype.count = function(this: string, countChar: string): number {
	return this.reduce((count, currentChar) => {
		return count + (currentChar === countChar ? 1 : 0);
	}, 0);
}
String.prototype.reversed = function(this: string): string {
	return this.reduceRight((reversed, char) => {
		return reversed + char;
	}, "");
}

//#endregion

//#region getting the writing and formatting rules ================================================================== //

const rules = Object.entries(rulesSource).reduce((rules, [description, patternOrPatterns]) => {
	rules[description] = (patternOrPatterns instanceof Array ? patternOrPatterns : [patternOrPatterns])
	                     .map((pattern) => {
		                     let flags = pattern.flags;
		                     if(!flags.includes("g")) flags += "g";
		                     return new RegExp(pattern, flags);
	                     });
	return rules;
}, {} as {
	[description: string]: RegExp[];
}) as {
	readonly [description: string]: RegExp[];
};

//#endregion

//#region searching for files ======================================================================================= //

function readdirRecursiveSync(rootPath: PathLike): string[] {
	return readdirSync(rootPath).flatMap((childPath) => {
		childPath = `${rootPath}/${childPath}`;

		if(statSync(childPath).isDirectory()) {
			return readdirRecursiveSync(childPath);
		}

		return [normalizePath(childPath)];
	});
}

const filepaths = readdirRecursiveSync("docs")
	.filter((filepath) => filepath.endsWith(".md"))
	.filter((filepath) => !filepath.endsWith("cc-by-sa-4.0.md"));

//#endregion

//#region searching for problems ==================================================================================== //

enum ProblemOrigin {
	T3M_RULES = "t3m",
	MARKDOWNLINT = "markdownlint"
}

class Problem {
	private constructor(readonly origin: ProblemOrigin,

	                    readonly filepath: string,
	                    readonly description: string,

	                    readonly lines: string[],

	                    readonly beginLineno: number,
	                    readonly beginColumn: number,

	                    readonly endLineno: number,
	                    readonly pastLastColumn: number) {
	}

	private static countLn(str: string): number {
		return str.count("\n");
	}
	private static lineSpan(str: string, beginLineno: number, endLineno: number): string[] {
		return str.split(/\r?\n|\n/).slice(beginLineno - 1, endLineno);
	}

	static fromIndex(origin: ProblemOrigin,
	                 filepath: string,
	                 description: string,
	                 fileContents: string,
	                 index: number,
	                 length: number): Problem {

		const lastLinePattern = /\n(.*)$/;

		const prefix = fileContents.substring(0, index);
		const beginLineno = Problem.countLn(prefix) + 1;
		const beginColumn = (prefix.match(lastLinePattern)?.[1] ?? prefix).length + 1;

		const substring = fileContents.substring(index, index + length);
		const endLineno = Problem.countLn(substring) + beginLineno;

		const match = substring.match(lastLinePattern);
		const pastLastColumn = (match === null
		                        ? beginColumn + substring.length
		                        : match[1].length + 1);

		const lines = Problem.lineSpan(fileContents, beginLineno, endLineno);

		return new Problem(origin, filepath, description, lines, beginLineno, beginColumn, endLineno, pastLastColumn);
	}

	static fromLinenoAndColumn(origin: ProblemOrigin,
	                           filepath: string,
	                           description: string,
	                           fileContents: string,
	                           beginLineno: number,
	                           beginColumn: number,
	                           endLineno: number = beginLineno,
	                           pastLastColumn?: number): Problem {

		const lines = Problem.lineSpan(fileContents, beginLineno, endLineno);

		if(pastLastColumn === undefined) pastLastColumn = lines[endLineno - beginLineno].length + 1;

		return new Problem(origin,
		                   filepath,
		                   description,
		                   lines,
		                   beginLineno,
		                   beginColumn,
		                   endLineno,
		                   pastLastColumn);
	}
}

const problems = filepaths.reduce((problems, filepath) => {
	const file = readFileSync(filepath).toString();

	for(const [description, patterns] of Object.entries(rules)) {
		patterns.forEach((pattern) => {
			for(const match of file.matchAll(pattern)) {
				problems.push(Problem.fromIndex(ProblemOrigin.T3M_RULES,
				                                filepath,
				                                description,
				                                file,
				                                match.index!!,
				                                match[0].length));
			}
		});
	}

	markdownlint.sync({
		files: filepath,
		config: { "line-length": false }
	})[filepath].forEach((result) => {
		let description = `${result.ruleNames.join("/")} ${result.ruleDescription}`;
		if(result.errorDetail) description += ` [${result.errorDetail}]`;

		const [beginColumn, pastLastColumn] = (result.errorRange
		                                       ? [result.errorRange[0], result.errorRange[0] + result.errorRange[1]]
		                                       : [1, undefined]);

		problems.push(Problem.fromLinenoAndColumn(ProblemOrigin.MARKDOWNLINT,
		                                          filepath,
		                                          description,
		                                          file,
		                                          result.lineNumber,
		                                          beginColumn,
		                                          result.lineNumber,
		                                          pastLastColumn));
	});

	return problems;
}, [] as Problem[]);

//#endregion

//#region printing problems

const fileInfoStyle = chalk.bold;
const errorNonWsStyle = chalk.red.bold;
const errorWsStyle = chalk.red.bgRed;

function errorStyle(text: string): string {
	return text.replace(/(\S+)/g, (_, s) => errorNonWsStyle(s))
	           .replace(/(\s+)/g, (_, s) => errorWsStyle(s));
}

function linenoPrefix(lineno: number): string {
	return lineno.toString().padStart(5, " ") + " | ";
}

function printProblem(problem: Problem) {
	const {
		origin,

		filepath,
		description,

		lines,

		beginLineno,
		beginColumn,

		endLineno,
		pastLastColumn: endColumn
	} = problem;

	console.log(`${fileInfoStyle(`${filepath}:${beginLineno}:${beginColumn}:`)} (${origin}) ${description}`);

	if(lines.length === 1) {
		const line = lines[0];

		console.log(linenoPrefix(beginLineno) +
		            line.substring(0, beginColumn - 1) +
		            errorStyle(line.substring(beginColumn - 1, endColumn - 1)) +
		            line.substring(endColumn - 1));
		return;
	}

	lines.forEach((line, i) => {
		switch(i) {
			case(0): {
				console.log(linenoPrefix(beginLineno) +
				            line.substring(0, beginColumn - 1) +
				            errorStyle(line.substring(beginColumn - 1)));
				break;
			}
			case(lines.length - 1): {
				console.log(linenoPrefix(endLineno) +
				            errorStyle(line.substring(0, endColumn - 1)) +
				            line.substring(endColumn - 1));
				break;
			}
			default: {
				console.log(linenoPrefix(beginLineno + i) + errorStyle(line));
				break;
			}
		}
	});
}

if(problems.length !== 0) {
	process.exitCode = 32;

	printProblem(problems[0]);

	problems.slice(1).forEach((problem) => {
		console.log();
		printProblem(problem);
	});
}

//#endregion
