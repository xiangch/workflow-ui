<script>
	export default {
		data() {
			return {
				// 节点
				nodes: [{
						id: 'node1', // String，可选，节点的唯一标识						
						x: 40, // Number，必选，节点位置的 x 值
						y: 40, // Number，必选，节点位置的 y 值
						shape: 'custom-rect',
						title2: 'hello', // String，节点标签
					},
					{
						id: 'node2', // String，节点的唯一标识
						x: 160, // Number，必选，节点位置的 x 值
						y: 180, // Number，必选，节点位置的 y 值						
						shape: 'custom-rect',
						title2: 'word', // String，节点标签: 'world', // String，节点标签
					},
				],
				// 边
				edges: [{
					source: 'node1', // String，必须，起始节点 id
					target: 'node2', // String，必须，目标节点 id
				}, ]
			}
		}
	}
</script>
