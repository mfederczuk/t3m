import { PathLike, readdirSync, statSync } from "fs";

export function readdirRecursiveSync(path: PathLike): string[] {
	return readdirSync(path)
		.flatMap((childPath) => {
			childPath = `${path}/${childPath}`;

			if(!statSync(childPath).isDirectory()) {
				return childPath;
			}

			return readdirRecursiveSync(childPath);
		});
}

export type NonEmptyArray<T> = [T, ...T[]];

export function NonEmptyArray<T>(array: T[]): NonEmptyArray<T>;
export function NonEmptyArray<T>(array: readonly T[]): Readonly<NonEmptyArray<T>>;
export function NonEmptyArray<T>(array: readonly T[]): Readonly<NonEmptyArray<T>> {
	if(array.length === 0) {
		throw new Error("Array is empty");
	}

	return array as NonEmptyArray<T>;
}
