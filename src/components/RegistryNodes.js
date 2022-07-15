import {
	Graph
} from '@antv/x6'
import QueryNode from "./QueryNode.vue"
//流程开始节点
Graph.registerNode("start-node", {
	inherit: 'rect',
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
//流程结束节点
Graph.registerNode("end-node", {
	inherit: 'rect',
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
//查询表单节点
Graph.registerNode("query-node", {
	inherit: "vue-shape",
	width: 200,
	height: 128,
	component: {
		template: `<QueryNode />`,
		components: {
			QueryNode,
		},
	},
});
//分支条件开始节点
Graph.registerNode('switch-start-node', {
	inherit: 'rect',
	width: 72,
	height: 36,
	label: '添加条件',
	attrs: {
		body: {
			fill: 'white',
			stroke: '#A2B1C3',
			rx: 15,
			ry: 15,
			event: 'case:add',
		},
		label: {
			'font-size': 12,
			'text-anchor': 'middle',
			'pointer-events': 'none',
		}
	}
})
//分支条件分支节点
Graph.registerNode('switch-case-node', {
	inherit: 'query-node',
});
//分支条件结束节点
Graph.registerNode('switch-end-node', {
	inherit: 'circle',
	width: 10,
	height: 10,
	label: '',	
	attrs: {
		body: {
			fill: '#A2B1C3',
			stroke: '#A2B1C3',
			rx: 15,
			ry: 15,
		},
		
	}
})
