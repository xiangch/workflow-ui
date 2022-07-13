import {
	Graph
} from '@antv/x6'
import QueryNode from "./QueryNode.vue"

Graph.registerNode("query-node", {
	inherit: "vue-shape",
	width: 200,
	height: 105,
	component: {
		template: `<QueryNode />`,
		components: {
			QueryNode,
		},
	},
});