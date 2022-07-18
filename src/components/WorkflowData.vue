<script>
	export default {
		data() {
			return {
				tasks: [{
						"name": "task_1",
						"title": "任务1"
					},
					{
						"name": "task_2",
						"title": "任务2"
					},
					{
						"name": "switch_1",
						"type": "switch",
						"decisionCases": {
							"条件1": [],
							"条件2": [],
						},
						"defaultCase": [],
					},
					{
						"name": "task_3",
						"title": "任务3"
					},
				]
			}
		}
	}
</script>
