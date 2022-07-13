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
	import './QueryNode.js'
	import './AddEdge.js'

	let graph = null;
	// 布局方向
	const dir = 'TB' // LR RL TB BT
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
					height: 598,
					grid: true,
				});
				graph.on('edge:mouseenter', ({
					cell
				}) => {
					if (!cell.hasTool('add-button')) {
						cell.addTools('add-button')
					}
				})

				graph.on('edge:mouseleave', ({
					cell
				}) => {
					if (cell.hasTool('add-button')) {
						cell.removeTool('add-button')
					}
				})
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
			layout: function() {
				const nodes = graph.getNodes()
				const edges = graph.getEdges()
				const g = new dagre.graphlib.Graph()
				g.setGraph({
					rankdir: dir,
					nodesep: 16,
					ranksep: 16
				})
				g.setDefaultEdgeLabel(() => ({}))

				const width = 260
				const height = 90
				nodes.forEach((node) => {
					g.setNode(node.id, {
						width,
						height
					})
				})

				edges.forEach((edge) => {
					const source = edge.getSource()
					const target = edge.getTarget()
					g.setEdge(source.cell, target.cell)
				})

				dagre.layout(g)

				graph.freeze()

				g.nodes().forEach((id) => {
					const node = graph.getCell(id)
					if (node) {
						const pos = g.node(id)
						node.position(pos.x, pos.y)
					}
				})

				edges.forEach((edge) => {
					const source = edge.getSourceNode()
					const target = edge.getTargetNode()
					const sourceBBox = source.getBBox()
					const targetBBox = target.getBBox()

					console.log(sourceBBox, targetBBox)

					if ((dir === 'LR' || dir === 'RL') && sourceBBox.y !== targetBBox.y) {
						const gap =
							dir === 'LR' ?
							targetBBox.x - sourceBBox.x - sourceBBox.width :
							-sourceBBox.x + targetBBox.x + targetBBox.width
						const fix = dir === 'LR' ? sourceBBox.width : 0
						const x = sourceBBox.x + fix + gap / 2
						edge.setVertices([{
								x,
								y: sourceBBox.center.y
							},
							{
								x,
								y: targetBBox.center.y
							},
						])
					} else if (
						(dir === 'TB' || dir === 'BT') &&
						sourceBBox.x !== targetBBox.x
					) {
						const gap =
							dir === 'TB' ?
							targetBBox.y - sourceBBox.y - sourceBBox.height :
							-sourceBBox.y + targetBBox.y + targetBBox.height
						const fix = dir === 'TB' ? sourceBBox.height : 0
						const y = sourceBBox.y + fix + gap / 2
						edge.setVertices([{
								x: sourceBBox.center.x,
								y
							},
							{
								x: targetBBox.center.x,
								y
							},
						])
					} else {
						edge.setVertices([])
					}
				})

				graph.unfreeze()
			}
		},
		mounted: function() {
			this.initGraph()
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
	#container {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
