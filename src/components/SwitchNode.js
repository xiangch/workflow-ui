//条件分支
import {
	Graph
} from '@antv/x6'

import './RegistryNodes.js'
import './RegistryEdges.js'
import layout from './Layout.js'
let caseId = 0
let switchId = 0

let SwitchNode = {
	addCase(graph,switchId,caseId){
		const caseNode = graph.addNode({
			id: 'switch_' + switchId + '_case_' + caseId,
			shape: 'query-node',
			data: {
				title: '条件' + caseId
			}
		})
		graph.addEdge({
			shape: 'switch-start-edge',
			source: 'switch_start_'+switchId,
			target: caseNode.id,
		})
		graph.addEdge({
			shape: 'switch-end-edge',
			source: caseNode.id,
			target: 'switch_end_'+switchId,
		});
		return caseNode;
	},
	createSwitchNodes(graph) {

		switchId++
		const caseId = 1;

		const switchStartNode = graph.addNode({
			id: 'switch_start_' + switchId,
			shape: 'switch-start-node',
			data: {
				switchId: switchId,
				caseId: caseId
			}
		})
		const switchEndNode = graph.addNode({
			id: 'switch_end_' + switchId,
			shape: 'switch-end-node'
		})
		const case1Node = this.addCase(graph,switchId,caseId)
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
			const data = node.getData()
			var caseId = data.caseId
			const switchId = data.switchId
			console.log("switchId:" + switchId + " caseId:" + caseId)
			caseId++
			this.addCase(graph,switchId,caseId)
			node.updateData({"caseId":caseId})
			layout(graph)
		})
	}
}
export default SwitchNode
