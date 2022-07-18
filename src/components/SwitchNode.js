//条件分支
import {
	Graph
} from '@antv/x6'

import './RegistryNodes.js'
import './RegistryEdges.js'
import layout from './Layout.js'


let SwitchNode = {

	addCase(graph, switchNode, caseId) {
		var caseIndex = switchNode.getData().caseIndex;
		const switchId = switchNode.id
		const caseNode = graph.addNode({
			id: caseId,
			shape: 'query-node',
			data: {
				title: '条件' + caseIndex
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
		caseIndex++
		switchNode.updateData({
			"caseIndex": caseIndex
		})
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
				this.addCase(graph, switchStartNode, node.id)
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
			//TODO: caseId 要保证唯一
			this.addCase(graph, node, "caseId_" + Math.random())
			layout(graph)
		})
	}
}
export default SwitchNode
