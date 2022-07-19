//条件分支
import {
	Graph
} from '@antv/x6'

import './RegistryNodes.js'
import './RegistryEdges.js'
import layout from './Layout.js'
import addNode from "./NodeUtil.js";
import {
	v4 as uuidv4
} from 'uuid';


let SwitchNode = {

	addCase(graph, switchId, caseTitle, childNodes) {
		const caseId = 'case_' + switchId + '_' + uuidv4();

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
		const lastEdge = graph.addEdge({
			shape: 'switch-end-edge',
			source: caseNode.id,
			target: switchId + '_end',
		})

		if (childNodes) {
			var defaultCase = [];
			var decisionCases = {};
			var edge = lastEdge
			childNodes.forEach(task => {
				if (task.type == 'switch') {
					decisionCases = task.decisionCases
					defaultCase = task.defaultCase
				}
				edge = addNode(edge, {
					id: task.taskReferenceName,
					title: task.title,
					type: task.type,
					decisionCases: decisionCases,
					defaultCase: defaultCase,
				})
			})

		}
		return caseNode
	},
	createSwitchNodes(graph, switchId, decisionCases, defaultCase) {
		var caseIndex = 1;
		const switchStartNode = graph.addNode({
			id: switchId,
			shape: 'switch-start-node',
			data: {
				caseIndex: caseIndex
			}
		})
		const switchEndNode = graph.addNode({
			id: switchId + '_end',
			shape: 'switch-end-node'
		})
		Object.keys(decisionCases).forEach(
			key => {
				this.addCase(graph, switchId, key, decisionCases[key])
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
