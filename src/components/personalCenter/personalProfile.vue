<template>
	<div class="personalProfile">
		<div class="textArea">
			<textarea @change="wacthlength" placeholder="有趣的灵魂从简介开始" name="" rows="" cols="" ></textarea>
			<div class="wraing">
				{{number}}/40
			</div>
		</div>
		<el-button>
			确定
		</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				number:0,
				texts:'',
			}
		},
		methods:{
			wacthlength(){
				console.log("获取长度");
			},
		}
	}
</script>

<style scoped="scoped" lang="less">
	.personalProfile{
		width: 7.1rem;
		height: 4rem;
		margin: 0 auto;
		margin-top: 0.12rem;
	}
	.textArea{
		position: relative;
		height: 4rem;
		.wraing{
			position: absolute;
			bottom: 0.3rem;
			right: 0.3rem;
			font-size: 0.3rem;
			color: rgba(28,28,28,1);
		}
	}
	textarea{
		width: 7.1rem;
		background: rgba(248,248,248,1);
		height: 4rem;
		border: none;
		padding: 0.3rem;
		font-size: 0.3rem;
		line-height: 0.46rem;
	}
</style>