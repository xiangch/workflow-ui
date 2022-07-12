import {
	Graph,
	ObjectExt
} from '@antv/x6'


Graph.registerNode('custom-rect', {
		width: 200,
		height: 60,
		attrs: {
			body: {
				stroke: '#5F95FF',
				strokeWidth: 1,
				fill: 'rgba(95,149,255,0.05)',
				refWidth: 1,
				refHeight: 1,
			},
			image: {
				'xlink:href': 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
				width: 16,
				height: 16,
				x: 12,
				y: 12,
			},
			title: {
				text: 'Node',
				refX: 40,
				refY: 14,
				fill: 'rgba(0,0,0,0.85)',
				fontSize: 12,
				'text-anchor': 'start',
			},
			text: {
				text: 'this is content text',
				refX: 40,
				refY: 38,
				fontSize: 12,
				fill: 'rgba(0,0,0,0.6)',
				'text-anchor': 'start',
			},
		},
		markup: [{
				tagName: 'rect',
				selector: 'body',
			},
			{
				tagName: 'image',
				selector: 'image',
			},
			{
				tagName: 'text',
				selector: 'title',
			},
			{
				tagName: 'text',
				selector: 'text',
			},
		],
		propHooks: {
			title2(metadata) {
				const {
					title2,
					...others
				} = metadata
				if (title2) {
					ObjectExt.setByPath(others, 'attrs/title/text', title2)
				}
				return others
			}
		}
	},
	true,
)
