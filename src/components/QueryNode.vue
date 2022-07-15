<template>
	<div class="flow-node">
		<div class="flow-node-box" draggable="true">
			<div class="flow-node-title-container"><img class="flow-node-title-icon"
					src="https://img.alicdn.com/imgextra/i2/O1CN01JyVspc1Irlm2aQTv8_!!6000000000947-55-tps-28-28.svg"
					alt="title-icon">
				<div class="live-edit-text flow-node-title"><span class="clickable-text-container"><span
							class="clickable-text">{{title}}</span></span></div>
			</div>
			<div class="flow-node-content">
				<div class="flow-node-text" title="从 [库存表] 中获取多条数据">从 [库存表] 中获取多条数据</div><img width="16" height="16"
					src="https://img.alicdn.com/imgextra/i1/O1CN01o2m7uy1v0t2dUa6fc_!!6000000006111-55-tps-16-16.svg"
					alt="">
			</div>
		</div>
		<div class="flow-node-toolbar"><img
				src="https://img.alicdn.com/imgextra/i1/O1CN012TTXxw1DrheYgdA5E_!!6000000000270-55-tps-14-14.svg"
				alt=""><img
				src="https://img.alicdn.com/imgextra/i4/O1CN01ElGIdh1mkqEtMw6s4_!!6000000004993-55-tps-14-14.svg" alt=""
				aria-haspopup="true" aria-expanded="false"></div>
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
			if (title) {
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
	.flow-node {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		border-radius: 8px;
		background-color: #fff;
		cursor: pointer;
	}

	.flow-node .flow-node-box {
		min-height: 70px;
		padding: 5px 10px 8px;
		border-radius: 8px;
		border: 2px solid transparent;
		-webkit-box-shadow: 0 1px 4px 0 rgb(10 30 65 / 16%);
		box-shadow: 0 1px 4px 0 rgb(10 30 65 / 16%);
		-webkit-transition: all .1s cubic-bezier(.645, .045, .355, 1);
		transition: all .1s cubic-bezier(.645, .045, .355, 1);
	}

	.flow-node .flow-node-title-container {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 14px;
		color: #1f1f1f;
		text-align: left;
		border-radius: 4px 4px 0 0;
		cursor: pointer;
	}

	.flow-node .flow-node-title-container .flow-node-title {
		margin-left: 6px;
		font-size: 14px;
		font-weight: 600;
		color: #1f1f1f;
	}

	.live-edit-text {
		position: relative;
	}

	.clickable-text-container {
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 2px;
		line-height: 1.6;
		border-radius: 4px;
		cursor: pointer;
		overflow: hidden;
	}



	.flow-node .flow-node-title-container .clickable-text {
		font-weight: 600;
	}

	.clickable-text-container .clickable-text {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		word-break: break-all;
	}

	element.style {}

	.flow-node .flow-node-content,
	.flow-node .flow-node-content>.next-icon {
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 14px;
	}

	.flow-node .flow-node-content {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-ms-flex-pack: justify;
		justify-content: space-between;
		line-height: 32px;
		min-height: 32px;
		color: #111f2c;
		background: rgba(0, 0, 0, .03);
		border-radius: 4px;
		padding: 4px 8px;
		margin-top: 6px;
	}
	
	.flow-node .flow-node-text {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
		line-height: 24px;
	}
</style>
