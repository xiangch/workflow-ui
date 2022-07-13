import {
	Graph
} from '@antv/x6'

Graph.registerNodeTool('add-button', {
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
	
	x: '100%',
	offset: {
		x: -10,
		y: -10
	},
	onClick({
		view
	}) {
		const node = view.cell
		console.log(node)
	}
})

Graph.registerNodeTool('del-button', {
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
			textContent: '-',
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
	x: '100%',
	offset: {
		x: -34,
		y: -10
	},
	onClick({
		view
	}) {
		const node = view.cell
		console.log(node)
	}
})