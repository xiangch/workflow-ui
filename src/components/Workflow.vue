<template>
	<div id="container"></div>
	<input v-model="title" placeholder="edit me">
	<p>Title is: {{ title }}</p>
</template>

<script>
	import {
		Graph,
	} from '@antv/x6'
	import WorkflowGraph from './WorkflowGraph.js'
	import data from './WorkflowData.vue'

	let graph = null;

	export default {
		name: "WorkFlow",
		mixins: [data],
		data() {
			return {
				title: '节点名称'
			}
		},
		methods: {
			initGraph: function() {
				graph = WorkflowGraph.init("container");
				WorkflowGraph.fromJSON(this.tasks)
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
			this.$watch('title', function(newVal, oldVal) {
				console.log(newVal, oldVal);
				this.setTitle(newVal);
			})
		}
	}
</script>

<style>

</style>
