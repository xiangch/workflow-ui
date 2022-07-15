//条件分支
import {
	Graph
} from '@antv/x6'
import WorkflowGraph from './WorkflowGraph.js'
import  './RegistryNodes.js'
import  './RegistryEdges.js'
let caseId = 0
let switchId = 0


function addSwitchNode() {
	switchId++
	caseId++
	const graph = WorkflowGraph.self
	const switchStartNode = graph.addNode({
		id: 'switch_start_' + switchId,
		shape: 'switch-start-node'
	})
	const switchEndNode = graph.addNode({
		id: 'switch_end_' + switchId,
		shape: 'switch-end-node'
	})
	const case1Node = graph.addNode({
		id: 'switch_'+switchId+'_case_' + caseId,
		shape: 'query-node',
		data: {
			title: '条件1'
		}
	})
	const defaultNode = graph.addNode({
		id: 'switch_'+switchId+'_case_default',
		shape: 'query-node',
		data: {
			title: '其它情况'
		}
	})
	graph.addEdge({
		shape: 'switch-start-edge',
		source: switchStartNode.id,
		target: case1Node.id,
	});
	graph.addEdge({
		shape: 'switch-start-edge',
		source: switchStartNode.id,
		target: defaultNode.id,
	});
	graph.addEdge({
		shape: 'switch-end-edge',
		source: case1Node.id,
		target: switchEndNode.id,
	});
	graph.addEdge({
		shape: 'switch-end-edge',
		source: defaultNode.id,
		target: switchEndNode.id,
	});
	
	return [switchStartNode,switchEndNode];
}
export default addSwitchNode
