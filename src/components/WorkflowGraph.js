import {
	Graph
} from "@antv/x6";
import layout from "./Layout.js";

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
			width: 120,
			height: 60,
			label: '流程发起',
			attrs: {
				body: {
					fill: '#55aa7f',
					stroke: '#55aa7f',
					rx: 15,
					ry: 15,
				},
				label: {
					fill: 'white',
					'font-size': 16,
					'text-anchor': 'middle',
					'pointer-events': 'none',
				}
			}

		})
		graph.addNode({
			id: 'end',
			width: 120,
			height: 60,
			label: '流程结束',
			attrs: {
				body: {
					fill: '#6E6E6E',
					stroke: '#6E6E6E',
					rx: 15,
					ry: 15,
				},
				label: {
					fill: 'white',
					'font-size': 16,
					'text-anchor': 'middle',
					'pointer-events': 'none',
				}
			}
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
