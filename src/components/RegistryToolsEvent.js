function disableTool(cell) {
	const notNeedToolShape = ['start-node',
		'end-node',
		'switch-start-node',
		'switch-end-node',
		'switch-start-edge',
	]
	return notNeedToolShape.includes(cell.shape)
}

function registryToolsEvent(graph) {
	graph.on('edge:mouseenter', ({
		cell
	}) => {
		if (!cell.hasTool('edge-add-button') && !disableTool(cell)) {
			cell.addTools('edge-add-button')
		}
	})

	graph.on('edge:mouseleave', ({
		cell
	}) => {
		if (cell.hasTool('edge-add-button')) {
			cell.removeTool('edge-add-button')
		}
	})

	graph.on('node:mouseenter', ({
		cell
	}) => {

		if (!cell.hasTool('node-add-button') && !disableTool(cell)) {
			cell.addTools('node-add-button')
		}
		if (!cell.hasTool('node-del-button') && !disableTool(cell)) {
			cell.addTools('node-del-button')
		}
	})

	graph.on('node:mouseleave', ({
		cell
	}) => {
		if (cell.hasTool('node-add-button')) {
			cell.removeTool('node-add-button')
		}
		if (cell.hasTool('node-del-button')) {
			cell.removeTool('node-del-button')
		}
	})







	graph.on('edge:click', ({
		cell
	}) => {
		console.log('....')
	})


}
export default registryToolsEvent;
