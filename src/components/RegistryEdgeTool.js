import {
	Graph
} from '@antv/x6'
import addNode from './NodeUtil.js'
let nodeId = 0;

Graph.registerEdgeTool('edge-add-button', {
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
		nodeId++
		const edge = view.cell
		const newNode = {
			id: 'node_' + nodeId,
			type: 'simple',
			title: '查询多条数据' + nodeId,
			cases: []
		};
		//假设第二个节点是分支（用于演示）
		if (nodeId == 2) {
			newNode.type = 'switch'
			newNode.cases = [{
				id: 'caseId_1'
			}]
		}
		addNode(edge, newNode)
	}
})
