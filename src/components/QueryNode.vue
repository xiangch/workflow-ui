<template>
	<div>
		<el-button>{{ title }} </el-button>
	</div>
</template>

<script>
	export default {
		name: "QueryNode",
		inject: ["getGraph", "getNode"],
		data() {
			return {
				title: "default",
			};
		},
		mounted() {
			const self = this;
			const node = this.getNode();
			const {
				title
			} = node.getData();
			if(title){
				self.title = title
			}
			// 监听数据改变事件
			node.on("change:data", ({
				current
			}) => {
				self.title = current.title;
			});
		},
		methods: {
			setTitle(title) {
				const node = this.getNode();
				node.setData({
					title: title,
				});
			},
		},
	};
</script>


<style>
</style>
