<template>
	<div id="container"></div>
	<input v-model="title" placeholder="edit me">
	<p>Title is: {{ title }}</p>
</template>

<script>
	import {
		Graph
	} from '@antv/x6'
	import data from './WorkflowData.vue'
	import "@antv/x6-vue-shape"
	import QueryNode from "./QueryNode.vue"
	let graph = null;
	export default {
		name: "WorkFlow",
		mixins: [data],
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
					height: 600,
					grid: true,
				});
				Graph.registerNode("queryNode", {
					inherit: "vue-shape",
					width: 150,
					height: 100,
					component: {
						template: `<QueryNode />`,
						components: {
							QueryNode,
						},
					},
				});
			},
			createNodes: function() {
				this.nodes.forEach(node => {
					graph.addNode(node)
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
			}
		},
		mounted: function() {
			this.initGraph()
			this.createNodes()
			this.$watch('title', function(newVal, oldVal) {
				console.log(newVal, oldVal);
				this.setTitle(newVal);
			})
		}
	}
</script>

<style>
	#container {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
