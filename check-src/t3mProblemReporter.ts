import { Problem, ProblemLine } from "./problem";
import { NonEmptyArray } from "./utils";

export interface T3mProblemReportCreatorLineRange {
	inRange(range: { begin: number, length: number; }): T3mProblemReportCreatorLine;
}

export interface T3mProblemReportCreatorLine {
	atLine(lineNr: number): T3mProblemReportCreatorLineRange;
}

export interface T3mProblemReportCreator {
	withMessage(message: string): T3mProblemReportCreatorLine;
}

interface TemporaryProblemLine {
	readonly nr: number;
	range?: {
		readonly begin: number;
		readonly length: number;
	};
}

interface TemporaryProblem {
	message?: string;
	lines: TemporaryProblemLine[];
}

export class T3mProblemReporter {
	#problems: TemporaryProblem[] = [];

	newProblem(): T3mProblemReportCreator {
		const temporaryProblem: TemporaryProblem = { lines: [] };

		this.#problems.push(temporaryProblem);

		return {
			withMessage(message: string): T3mProblemReportCreatorLine {
				temporaryProblem.message = message;

				const lineCreator: T3mProblemReportCreatorLine = {
					atLine(lineNr: number): T3mProblemReportCreatorLineRange {
						const temporaryLine: TemporaryProblemLine = { nr: lineNr };

						temporaryProblem.lines.push(temporaryLine);

						return {
							inRange(range: { begin: number, length: number; }): T3mProblemReportCreatorLine {
								temporaryLine.range = range;
								return lineCreator;
							}
						};
					}
				};

				return lineCreator;
			}
		};
	}

	retrieveProblems(filePath: string, fileLines: readonly string[]): Problem[] {
		return this.#problems
			.map((temporaryProblem): Problem => {
				if(temporaryProblem.message === undefined) {
					throw new Error("Problem without message");
				}

				if(temporaryProblem.lines.length === 0) {
					throw new Error("Problem without lines");
				}

				const lines: readonly ProblemLine[] = temporaryProblem.lines
					.map((temporaryProblemLine) => {
						if(temporaryProblemLine.range === undefined) {
							throw new Error("Problem line without range");
						}

						return {
							nr: temporaryProblemLine.nr,
							contents: fileLines[temporaryProblemLine.nr - 1],
							rangeBegin: temporaryProblemLine.range.begin,
							rangeLength: temporaryProblemLine.range.length
						};
					});

				return {
					origin: "t3m",
					filepath: filePath,
					message: temporaryProblem.message,
					lines: NonEmptyArray(lines)
				};
			});
	}
}
