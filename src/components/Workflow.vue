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
	
	import './QueryNode.js'
	import './AddEdge.js'
	import './NodeTool.js'

	import WorkflowGraph from './WorkflowGraph.js'

	let graph = null;
	
	export default {
		name: "WorkFlow",
		mixins: [data, tools],
		data() {
			return {
				title: '节点名称'
			}
		},
		methods: {
			initGraph: function() {
				graph = WorkflowGraph.init("container");
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
			this.registerToolsEvent()
			this.$watch('title', function(newVal, oldVal) {
				console.log(newVal, oldVal);
				this.setTitle(newVal);
			})
		}
	}
</script>

<style>

</style>
