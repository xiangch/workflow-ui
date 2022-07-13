<script>
	export default {
		methods:{
			toolsEvent: function (graph){
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
					if (!cell.hasTool('add-button')) {
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
					if (!cell.hasTool('del-button')) {
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
