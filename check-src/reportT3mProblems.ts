import assert from "assert";
import { Node as CommonMarkNode, NodeType, NodeWalkingStep } from "commonmark";
import { inspect } from "util";
import { Problem } from "./problem";
import { T3mProblemReporter } from "./t3mProblemReporter";

// TODO

function wordPatterns(...words: [string, ...string[]]) {

}

function walkFiltered(
	documentNode: CommonMarkNode,
	nodeTypeFilter: NodeType,
	stepHandler: (stepNode: CommonMarkNode) => void
) {

	const walker = documentNode.walker();
	let step: (NodeWalkingStep | null);

	while((step = walker.next()) !== null) {
		if(step.node.type !== nodeTypeFilter) {
			continue;
		}

		stepHandler(step.node);
	}
}

export function reportT3mProblems(
	filePath: string,
	fileLines: readonly string[],
	documentNode: CommonMarkNode
): Problem[] {

	const problemReporter = new T3mProblemReporter();

	walkFiltered(documentNode, "text", (node) => {
		console.log(inspect(node.sourcepos, false, null, true));
		// console.log(node.prev);
		console.log();
	});

	walkFiltered(documentNode, "thematic_break", (node) => {
		const [[startLine, startColumn], [endLine, endColumn]] = node.sourcepos;

		assert(startLine === endLine, "Start line and end line of thematic break are not the same");

		if(startColumn > 1) {
			problemReporter
				.newProblem()
				.withMessage("Horizontal separators must begin at column nr 1")
				.atLine(startLine).inRange({ begin: 1, length: startColumn - 1 });
		}

		const thematicBreak = fileLines[startLine - 1].substring(startColumn - 1, endColumn);

		if(thematicBreak !== "---") {
			problemReporter
				.newProblem()
				.withMessage("Horizontal separators must consist of exactly three dashes")
				.atLine(startLine).inRange({ begin: startColumn, length: endColumn - startColumn + 1 });
		}
	});

	return problemReporter.retrieveProblems(filePath, fileLines);
}
