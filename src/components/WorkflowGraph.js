import {
	Graph
} from "@antv/x6";

let workflowGraph = {
	self: {},
	init(container) {
		workflowGraph.self = new Graph({
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
		return workflowGraph.self;
	},
};

export default workflowGraph;
