import dagre from 'dagre'
// 布局方向
const dir = 'TB' // LR RL TB BT
function layout(graph) {
	const nodes = graph.getNodes()
	const edges = graph.getEdges()
	const g = new dagre.graphlib.Graph()
	g.setGraph({
		rankdir: dir,
		nodesep: 20,
		ranksep: 50
	})
	g.setDefaultEdgeLabel(() => ({}))

	const width = 200
	const height = 148
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

export default layout;
