<template>
	<div id="container"></div>
	<input v-model="title" placeholder="edit me">
	<p>Title is: {{ title }}</p>
</template>

<script>
	import {
		Graph,
	} from '@antv/x6'
	import dagre from 'dagre'
	import "@antv/x6-vue-shape"
	import data from './WorkflowData.vue'
	import tools from './ToolsEvent.vue'
	import layout from './Layout.vue'
	import './QueryNode.js'
	import './AddEdge.js'
	import './NodeTool.js'

	let graph = null;
	// 布局方向
	const dir = 'TB' // LR RL TB BT
	export default {
		name: "WorkFlow",
		mixins: [data,tools,layout],
		data() {
			return {
				title: "test",
			}
		},
		methods: {
			initGraph: function() {
				graph = new Graph({
					container: document.getElementById('container'),
					width: 800,
					height: 598,
					grid: true,
				});
				
			},
			createNodes: function() {
				//this.nodes来源于WorkflowData.vue
				this.nodes.forEach(node => {
					graph.addNode(node)
				})
			},
			createEdges: function() {
				//this.edges来源于WorkflowData.vue
				this.edges.forEach(edge => {
					graph.addEdge(edge)
				})
			},
			setTitle: function(title) {
				const nodes = graph.getNodes();
				if (nodes.length) {
					nodes.forEach((node) => {
						node.setData({
							title: title
						});
					});
				}
			},
		},
		mounted: function() {
			this.initGraph()
			this.toolsEvent(graph)
			this.createNodes()
			this.createEdges()
			this.$watch('title', function(newVal, oldVal) {
				console.log(newVal, oldVal);
				this.setTitle(newVal);
			})
		}
	}
</script>

<style>
	
</style>
