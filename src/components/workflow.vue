<template>
	<div id="container"></div>
	<button @click="add">外部 Add</button>
</template>

<script>
	import {
		Graph
	} from '@antv/x6'
	import data from './WorkflowData.vue'
	import './MyNode.js'
	export default {
		name: "WorkFlow",
		mixins: [data],
		methods: {
			initGraph: function() {

				this.graph = new Graph({
					container: document.getElementById('container'),
					width: 800,
					height: 600,
					grid: true,
				});
			},
			createNodes: function() {
				this.nodes.forEach(node => {
					this.graph.addNode(node)
				})

			},
			add: function() {
				const nodes = this.graph.getNodes();				
				if (nodes.length) {
					nodes.forEach((node) => {
						node.setAttrByPath("title/text",Math.random())
						console.log(node.shape)
					});
				}
			}
		},
		mounted: function() {
			this.initGraph()
			this.createNodes()
		}
	}
</script>

<style>
</style>
