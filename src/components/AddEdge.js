import {
	Graph

} from '@antv/x6'
import WorkflowGraph from './WorkflowGraph.js'
import layout from './Layout.js'
//自定义边
Graph.registerEdge(
	'add-edge', {
		zIndex: -1,
		attrs: {
			line: {
				strokeWidth: 2,
				stroke: '#A2B1C3',
			},
		},

	},
	true,
)
let nodeId=2;
Graph.registerEdgeTool('add-button', {
	inherit: 'button',
	markup: [{
			tagName: 'circle',
			selector: 'button',
			attrs: {
				r: 10,
				stroke: '#5555ff',
				'stroke-width': 2,
				fill: '#5555ff',
				cursor: 'pointer',
			},
		},
		{
			tagName: 'text',
			textContent: '+',
			selector: 'icon',
			attrs: {
				fill: 'white',
				'font-size': 20,
				'text-anchor': 'middle',
				'pointer-events': 'none',
				y: '0.3em',
			},
		},
	],
	distance: '50%',
	offset: {
		x: 5,
		y: 0
	},
	onClick({
		view
	}) {
		const edge = view.cell
		const sourceId = edge.source.cell
		const targetId = edge.target.cell
		const graph = WorkflowGraph.self
		nodeId++
		const newNodeId = "node"+nodeId
		const node = graph.addNode({
			id: newNodeId, 				
			x: 1, 
			y: 1, 				
			shape: 'query-node',
			data: {
				title: "查询多条数据"+nodeId,
			}
		});
		
		graph.removeEdge(edge);
		graph.addEdge({
			shape: 'add-edge',
			source: sourceId,
			target: node.id,
		});
		graph.addEdge({
			shape: 'add-edge',
			source: node.id,
			target: targetId,
		});
		layout(graph)
	}
})
