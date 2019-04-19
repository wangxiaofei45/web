<template>
	<div class="modifyTheNickname">
		<div class="inputCon">
			<el-input
			  placeholder="请输入内容"
			  v-model="nockName"
			  clearable>
			</el-input>
		</div>
		<div class="wraing">
			英文字母或者汉字开头,4-16个字符以内
		</div>
		<div class="error">
			
		</div>
		<el-button>
			确定修改
		</el-button>
	</div>
</template>

<script>
	export default{
		data (){
			return {
				nockName:"XXXX",
			}
		}
	}
</script>
<style type="text/css">
	.inputCon input{
		border: none;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.3rem;
		font-family: PingFang SC;
		color: rgba(28,28,28,1);
		letter-spacing: 0px;
	}
</style>
<style scoped="scoped" lang="less">
	.inputCon{
		width: 6.7rem;
		margin: 0 auto;
		border-bottom: 0.01rem rgba(229,229,229,1) solid;
	}
	.wraing{
		font-size: 0.26rem;
		text-align: left;
		padding: 0.3rem 0rem 0rem 0.62rem;
		font-family: PingFang SC;
		color: rgba(120,120,120,1);
		line-height: 0.46rem;
	}
	.error{
		width: 6.3rem;
		height: 0.4rem;
		margin: 0 auto;
		margin-top: 0.3rem;
		opacity: 1;
		background: rgba(49,48,54,1);
		font-size: 0.22rem;
		font-family: PingFang SC;
		color: rgba(255,255,255,1);
		line-height: 0.4rem;
	}
</style>