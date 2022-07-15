import {
	Graph
} from '@antv/x6'
import layout from './Layout.js'
import SwitchNode from './SwitchNode.js'
let nodeId = 0;
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
	offset: {
		x: 20,
		y: 0
	},
	onClick({
		view
	}) {

		const edge = view.cell
		const sourceId = edge.source.cell
		const targetId = edge.target.cell
		const graph = edge.model.graph
		nodeId++
		const newNodeId = "node_" + nodeId
		var newTarget = null
		var newSource = null
		if (nodeId == 2) {
			const nodes = SwitchNode.createSwitchNodes(graph)
			newTarget = nodes[0].id
			newSource = nodes[1].id
		} else {
			const node = graph.addNode({
				id: newNodeId,
				shape: 'query-node',
				data: {
					title: "查询多条数据" + nodeId,
				}
			});
			newTarget = node.id
			newSource = node.id
		}

		graph.removeEdge(edge);

		graph.addEdge({
			shape: 'add-edge',
			source: sourceId,
			target: newTarget,
		});
		graph.addEdge({
			shape: 'add-edge',
			source: newSource,
			target: targetId,
		});
		layout(graph)
	}
})
