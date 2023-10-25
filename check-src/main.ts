import { stderr as chalk } from "chalk";
import { Parser } from "commonmark";
import { existsSync, readFileSync } from "fs";
import { LintError as MarkdownLintError, sync as markdownlintSync } from "markdownlint";
import { inspect } from "util";
import { Problem } from "./problem";
import { reportT3mProblems } from "./reportT3mProblems";
import { readdirRecursiveSync } from "./utils";

const inputDirectoryPath = process.argv[2];

if(!existsSync(inputDirectoryPath)) {
	console.error(`${inspect(inputDirectoryPath)} does not exist. Aborting.`);
	process.exit();
}

const filepaths = readdirRecursiveSync(inputDirectoryPath)
	.filter((filepath) => filepath.endsWith(".md"))
	.filter((filepath) => filepath.endsWith("test.ignore.md"))
	.filter((filepath) => !filepath.endsWith("cc-by-sa-4.0.md"));

const markdownlintResults = markdownlintSync({
	files: filepaths,
	config: { "line-length": false }
});

const parser = new Parser();

function mapMarkdownlintErrorToProblem(
	markdownlintError: MarkdownLintError,
	filePath: string,
	fileLines: readonly string[]
): Problem {

	let description = `${markdownlintError.ruleNames.join("/")} ${markdownlintError.ruleDescription}`;
	if(markdownlintError.errorDetail) {
		description += ` [${markdownlintError.errorDetail}]`;
	}

	const lineContents = fileLines[markdownlintError.lineNumber - 1];

	let begin = 1, length = lineContents.length;
	if(markdownlintError.errorRange !== null) {
		begin = markdownlintError.errorRange[0];
		length = markdownlintError.errorRange[1];
	}

	return {
		origin: "markdownlint",
		filepath: filePath,
		message: description,
		lines: [{
			nr: markdownlintError.lineNumber,
			contents: lineContents,
			rangeBegin: begin,
			rangeLength: length
		}]
	};
}

const problems = filepaths
	.flatMap((filepath) => {
		const fileContents = readFileSync(filepath).toString();
		const fileLines: readonly string[] = fileContents.split("\n");

		const t3mProblems = reportT3mProblems(filepath, fileLines, parser.parse(fileContents));

		const markdownlintProblems = markdownlintResults[filepath]
			.map((markdownlintError) => mapMarkdownlintErrorToProblem(markdownlintError, filepath, fileLines));

		return [...t3mProblems/* , ...markdownlintProblems */];
	});

function printProblem(problem: Problem) {
	const fileInfoStyle = chalk.bold;
	const errorNonWsStyle = chalk.red.bold;
	const errorWsStyle = chalk.red.bgRed;

	const firstLine = problem.lines[0];

	let msg = "";

	msg += fileInfoStyle(`${problem.filepath}:${firstLine.nr}:${firstLine.rangeBegin}:`);
	msg += ` (${problem.origin}) ${problem.message}`;

	problem.lines
		.forEach((line) => {
			const rangeEnd = (line.rangeBegin - 1) + line.rangeLength;

			const contentsBeforeRange = line.contents.substring(0, line.rangeBegin - 1);
			const contentsInRange = line.contents.substring(line.rangeBegin - 1, rangeEnd);
			const contentsAfterRange = line.contents.substring(rangeEnd);

			msg += `\n${line.nr.toString().padStart(5, " ")} | `;

			const pattern = (() => {
				if(contentsBeforeRange.length === 0 && contentsAfterRange.length === 0) {
					return /^(?<leadingWs>\s*)(?<inside>.*?)(?<trailingWs>\s*)$/;
				} else if(contentsBeforeRange.length === 0) {
					return /^(?<leadingWs>\s*)(?<inside>.*)$/;
				} else if(contentsAfterRange.length === 0) {
					return /^(?<inside>.*?)(?<trailingWs>\s*)$/;
				} else {
					return /(?<inside>.*)/;
				}
			})();

			msg += contentsBeforeRange;

			const match = contentsInRange.match(pattern)!;
			msg += errorWsStyle(match.groups!["leadingWs"] ?? "");
			msg += errorNonWsStyle(match.groups!["inside"] ?? "");
			msg += errorWsStyle(match.groups!["trailingWs"] ?? "");

			msg += contentsAfterRange;

			msg += "\n" + " ".repeat(8 + contentsBeforeRange.length);
			if(contentsInRange.length === 0) {
				msg += errorNonWsStyle("^");
			} else {
				msg += errorNonWsStyle("~".repeat(contentsInRange.length));
			}
		});

	console.error(msg);
}

if(problems.length > 0) {
	process.exitCode = 32;

	printProblem(problems[0]);

	problems
		.slice(1)
		.forEach((problem) => {
			console.error();
			printProblem(problem);
		});
}
