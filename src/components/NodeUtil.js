import {
	Graph
} from '@antv/x6'
import layout from './Layout.js'
import SwitchNode from './SwitchNode.js'

function addNode(edge, nodeData) {
	const sourceId = edge.source.cell
	const targetId = edge.target.cell
	const graph = edge.model.graph

	const newNodeId = nodeData.id
	const newNodeTitle = nodeData.title
	var newTarget = null
	var newSource = null
	if (nodeData.type == 'switch') {
		const nodes = SwitchNode.createSwitchNodes(graph, nodeData.id, nodeData.decisionCases, nodeData.defaultCase)
		newTarget = nodes[0].id
		newSource = nodes[1].id
	} else {
		const node = graph.addNode({
			id: newNodeId,
			shape: 'query-node',
			data: {
				title: newNodeTitle,
			}
		});
		newTarget = node.id
		newSource = node.id
	}

	graph.removeEdge(edge);

	graph.addEdge({
		shape: 'add-edge',
		source: sourceId,
		target: newTarget,
	});
	const lastEdge = graph.addEdge({
		shape: 'add-edge',
		source: newSource,
		target: targetId,
	});
	layout(graph)
	return lastEdge
}
export default addNode
