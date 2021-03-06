import {
	Graph
} from "@antv/x6";
import "./RegistryNodes.js";
import "./RegistryEdges.js";
import "./RegistryNodeTool.js";
import "./RegistryEdgeTool.js";
import layout from "./Layout.js";
import registryToolsEvent from "./RegistryToolsEvent.js";
import SwitchNode from "./SwitchNode.js";
import addNode from "./NodeUtil.js";
import {
	v4 as uuidv4
} from 'uuid';


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
		})
		//监听鼠标移上去工具类出现
		registryToolsEvent(graph)
		//监听增加分支条件事件
		SwitchNode.registryEvent(graph)

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
	fromJSON(tasks) {
		const graph = this.self;
		const edges = graph.getEdges()
		var edge = edges[0]
		tasks.forEach(
			task => {
				var defaultCase = [];
				var decisionCases = {};
				if (task.type == 'switch') {
					decisionCases = task.decisionCases
					defaultCase = task.defaultCase
				}
				edge = addNode(edge, {
					id: task.taskReferenceName,
					title: task.title,
					type: task.type,
					decisionCases: decisionCases,
					defaultCase: defaultCase,
				});
			}
		)
	}
}

export default workflowGraph;
