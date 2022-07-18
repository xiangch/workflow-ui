//条件分支
import {
	Graph
} from '@antv/x6'

import './RegistryNodes.js'
import './RegistryEdges.js'
import layout from './Layout.js'
import { v4 as uuidv4 } from 'uuid';


let SwitchNode = {

	addCase(graph, switchNode, caseNodeData) {
		const switchId = switchNode.id
		const caseId = caseNodeData.id
		const caseTitle = caseNodeData.title;
		const caseNode = graph.addNode({
			id: caseId,
			shape: 'query-node',
			data: {
				title: caseTitle
			}
		})
		graph.addEdge({
			shape: 'switch-start-edge',
			source: switchId,
			target: caseNode.id,
		})
		graph.addEdge({
			shape: 'switch-end-edge',
			source: caseNode.id,
			target: 'switch_end_' + switchId,
		});

		return caseNode;
	},
	createSwitchNodes(graph, switchId, caseNodes) {
		var caseIndex = 1;
		const switchStartNode = graph.addNode({
			id: switchId,
			shape: 'switch-start-node',
			data: {
				caseIndex: caseIndex
			}
		})
		const switchEndNode = graph.addNode({
			id: 'switch_end_' + switchId,
			shape: 'switch-end-node'
		})
		caseNodes.forEach(
			node => {
				this.addCase(graph, switchStartNode, node)
			});


		const defaultNode = graph.addNode({
			id: 'switch_' + switchId + '_case_default',
			shape: 'query-node',
			data: {
				title: '其它情况'
			}
		})

		graph.addEdge({
			shape: 'switch-start-edge',
			source: switchStartNode.id,
			target: defaultNode.id,
		});

		graph.addEdge({
			shape: 'switch-end-edge',
			source: defaultNode.id,
			target: switchEndNode.id,
		});

		return [switchStartNode, switchEndNode];
	},
	registryEvent(graph) {
		graph.on('case:add', ({
			e,
			node
		}) => {
			e.stopPropagation()
			var caseIndex = node.getData().caseIndex
			console.log("caseId_" + uuidv4())
			const caseNode = {
				id: "caseId_" + uuidv4(),
				title: '条件' + caseIndex
			}

			this.addCase(graph, node, caseNode)

			node.updateData({
				"caseIndex": caseIndex
			})
			layout(graph)
		})
	}
}
export default SwitchNode
