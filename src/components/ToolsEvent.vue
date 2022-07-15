<script>
	import WorkflowGraph from './WorkflowGraph.js'

	function disableTool(cell) {
		const notNeedToolShape = ['start-node',
			'end-node',
			'switch-start-node',
			'switch-end-node',
			'switch-start-edge',
		]
		return notNeedToolShape.includes(cell.shape)
	}
	export default {
		methods: {
			registerToolsEvent: function() {
				const graph = WorkflowGraph.self;
				graph.on('edge:mouseenter', ({
					cell
				}) => {
					if (!cell.hasTool('add-button') && !disableTool(cell) ) {
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

				graph.on('node:mouseenter', ({
					cell
				}) => {

					if (!cell.hasTool('add-button') && !disableTool(cell)) {
						cell.addTools('add-button')
					}
				})

				graph.on('node:mouseleave', ({
					cell
				}) => {
					if (cell.hasTool('add-button')) {
						cell.removeTool('add-button')
					}
				})

				graph.on('node:mouseenter', ({
					cell
				}) => {
					if (!cell.hasTool('del-button') && !disableTool(cell)) {
						cell.addTools('del-button')
					}
				})

				graph.on('node:mouseleave', ({
					cell
				}) => {
					if (cell.hasTool('del-button')) {
						cell.removeTool('del-button')
					}
				})
			},

		}
	}
</script>
