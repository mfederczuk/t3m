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

import escapeStringRegexp from "escape-string-regexp";

function wordPatterns(firstWordsString: (string | RegExp), ...restWordsStrings: (string | RegExp)[]): RegExp[] {
	return [
		firstWordsString,
		...restWordsStrings
	].map((wordsString) => {
		let words: string[];
		let flags: string;

		if(wordsString instanceof RegExp) {
			words = wordsString.source.split(/\s+/);
			flags = wordsString.flags;
		} else {
			words = wordsString.split(/\s+/).map(escapeStringRegexp);
			flags = "im";
		}

		return new RegExp(`\\b${words.join("\\s+")}\\b`, flags);
	});
}

/**
 * These are the writing and formatting rules/guidelines for the t3m specifications.
 */
const rules: {
	readonly [description: string]: (RegExp | RegExp[]);
} = {
	// == writing guidelines ======================================================================================== //

	"do not refer to the writer": wordPatterns(/i(?!\.e\.:)/im, "my", "mine", "i'm", "myself", "me"),
	"do not refer to the reader": wordPatterns("you", "your", "yours", "you're", "yourself"),

	"do not use \"for example\" (except at the beginning of paragraphs)": wordPatterns(/(?<!^)for example/im),
	"do not use \"that means\" (except at the beginning of paragraphs)":  wordPatterns(/(?<!^)that means/im),

	"do not use \"forbidden\"":                      wordPatterns("forbidden"),
	"do not use \"shall\" or \"shall not\"":         wordPatterns("shall", "shall not"),
	"do not use \"can\", \"cannot\" or \"can not\"": wordPatterns("can", "cannot", "can not", "can't"),

	"write ellipsis with exactly three consecutive periods": /\.{4,}/m,
	"write ellipsis without whitespace between the periods": /\.(\s+\.)+/m,

	"do not write whitespace before punctuation": /\s+[,;]/m,
	"write whitespace after punctuation":         /[,;]\S/m,

	"do not use \"etc.\" in parenthesis":         /etc\s*\.(?=\s*\))/im,
	"do not use ellipsis outside of parenthesis": /\.{3}(?!\s*\))/m,

	// === formatting guidelines ==================================================================================== //

	"do not use a backslash to terminate lines": /\\$/m,

	"no trailing whitespace after two spaces":     /(?<=  )\s+$/m,
	"no singular whitespace character at the end": /(?<=\S+) $/m,
	// TODO no trailing whitespace that isn't space
	"no lines just containing whitespace":         /^\s+$/m,

	"no letters or digits after column 80": /^.{80}\w+$/imu,
	"no lines longer than 180":             /^.{180}.+$/m,

	"do not use equals characters for headings":             /^=+$/m,
	"headings are formatted with octothorpes on both sides": /^#[^#]*?(?!#)$/m, // this isn't really optimal, but
	                                                                            // markdownlint should catch those
	                                                                            // errors

	"no line with just one or two dashes":                  /^--?$/m,
	"horizontal separators must have exactly three dashes": /^-{4,}$/m,

	"strong emphasis is formatted with two asterisks":                             /_\*|\*_|__/,
	"explicitly called out names and inline quotes are formatted with underlines": /\*"[^"]*"\*/,

	"files must only contain printable characters and spaces": /[\0-\x09\x0B-\x1F\x7F]/m,

	"files must always end with exactly one newline character": /[^\n]$/,

	// === other ==================================================================================================== //

	"spellcheck": wordPatterns("branche") // common mistake when trying to turn plural "branches" to singular "branch"
};

export default rules;
