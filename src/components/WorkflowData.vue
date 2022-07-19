<script>
	export default {
		data() {
			return {
				tasks: [{
						"name": "task_1",
						"taskReferenceName": "t1",
						"title": "任务1"
					},
					{
						"name": "task_2",
						"taskReferenceName": "t2",
						"title": "任务2"
					},
					{
						"name": "switch_1",
						"taskReferenceName": "s1",
						"type": "switch",
						"decisionCases": {
							"条件1_1": [{
								"name": "queryForm",
								"taskReferenceName": "s1_t1",
								"title": "查询任务"
							}],
							"条件1_2": [{
									"name": "queryForm",
									"taskReferenceName": "s1_t2",
									"title": "查询任务"
								},
								{
									"name": "switch_2",
									"taskReferenceName": "s2",
									"type": "switch",
									"decisionCases": {
										"条件2_1": [{
											"name": "queryForm",
											"taskReferenceName": "s2_t1",
											"title": "查询任务"
										}],
									},
									"defaultCase": [],
								}
							],
						},
						"defaultCase": [],
					},
					{
						"name": "task_3",
						"taskReferenceName": "t3",
						"title": "任务3"
					},
				]
			}
		}
	}
</script>
