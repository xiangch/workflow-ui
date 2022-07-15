import {
	Graph
} from "@antv/x6";
import layout from "./Layout.js";
import "./RegistryNodes.js";

let workflowGraph = {
	self: {},
	init(container) {
		const graph = new Graph({
			container: document.getElementById(container),
			width: 1500,
			height: 800,
			// 自适应宽高
			autoResize: true,
			transforming: {
				clearAll: true,
				clearOnBlankMouseDown: true
			},
			// 是否允许连接到画布空白位置的点，默认为 true
			allowBlank: false,
			// 网格
			grid: {
				size: 10,
				visible: true,
				type: 'mesh', // 'dot' | 'fixedDot' | 'mesh'
				args: {
					color: '#D8D8D8', // 网格线/点颜色
					thickness: 0.5 // 网格线宽度/网格点大小
				}
			},
			grid: true,
			scroller: true,
		});
		workflowGraph.self = graph;
		graph.freeze()
		graph.addNode({
			id: 'start',
			shape: 'start-node'
		})
		graph.addNode({
			id: 'end',
			shape: 'end-node'
		})
		graph.addEdge({
			shape: 'add-edge',
			source: 'start',
			target: 'end',
		})
		layout(graph)
		return workflowGraph.self;
	},
};

export default workflowGraph;
