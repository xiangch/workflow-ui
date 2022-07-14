<script>
	export default {
		data() {
			return {
				// 节点
				nodes: [{
						id: 'node1', // String，可选，节点的唯一标识						
						x: 160, // Number，必选，节点位置的 x 值
						y: 40, // Number，必选，节点位置的 y 值						
						shape: 'query-node',
						data: {
							title: "查询多条数据",
						}
					},
					{
						id: 'node2', // String，节点的唯一标识
						x: 160, // Number，必选，节点位置的 x 值
						y: 250, // Number，必选，节点位置的 y 值							
						shape: 'query-node',
						data: {
							title: "查询单条数据",
						}
					},
				],
				// 边
				edges: [{
					shape: 'add-edge',
					source: 'node1', // String，必须，起始节点 id
					target: 'node2', // String，必须，目标节点 id
					// 可以通过事件动态加
					// tools: {
					// 	name: 'add-button'
					// },
				}, ]
			}
		}
	}
</script>