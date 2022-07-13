import {
	Graph
} from "@antv/x6";

let workflowGraph = {
	self: {},
	init(container) {
		workflowGraph.self = new Graph({
			container: document.getElementById(container),
			width: 800,
			height: 598,
			grid: true,
		});
		return workflowGraph.self;
	},
};

export default workflowGraph;
