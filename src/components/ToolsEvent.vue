<script>
	import WorkflowGraph from './WorkflowGraph.js'
	export default {
		methods:{
			registerToolsEvent: function (){
				const graph = WorkflowGraph.self;
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
				
				graph.on('node:mouseenter', ({
					cell
				}) => {
						
					if (!cell.hasTool('add-button') && cell.id!='start'  && cell.id!='end') {
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
					if (!cell.hasTool('del-button') && cell.id!='start'  && cell.id!='end') {
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
			}
		}
	}
</script>
