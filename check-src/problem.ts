import { NonEmptyArray } from "./utils";

export interface ProblemLine {
	readonly nr: number;
	readonly contents: string;
	readonly rangeBegin: number;
	readonly rangeLength: number;
}

export interface Problem {
	readonly origin: "t3m" | "markdownlint";
	readonly message: string;
	readonly filepath: string;
	readonly lines: Readonly<NonEmptyArray<ProblemLine>>;
}
