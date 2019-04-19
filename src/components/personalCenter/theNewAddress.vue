<template>
	<div class="modifyTheNickname">
		<div class="l1">
			<input
			  placeholder="收货人姓名"
			  v-model="formData.name"
			  >
			</input>
			<input
			  placeholder="手机号码"
			  v-model="formData.phone"
			  >
			</input>
			<input
			  placeholder="所在地区"
			  v-model="formData.areaName"
			  readonly="readonly"
			  @click="openSelectTheArea"
			  >
			</input>
			<input
				style="border:none;"
			  placeholder="详细地址(如道路、小区、门牌号等)"
			  v-model="formData.detailArea"
			  >
			</input>
		</div>
		<div class="interval">
		</div>
		<div class="l2">
			<div class="label flex_start">
				标签<div class="list">家</div><div class="list">公司</div>
			</div>
			<div class="defalut flex_between">
				<div class="title">
					设为默认地址
				</div>
				<mt-switch v-model="formData.isDefalut"></mt-switch>
				
			</div>
		</div>	
		<el-button>
			确定修改
		</el-button>
		
		<div class="selectArea" v-if="areaModel">
			<div class="areaCon">
				<div class="title">
					<img @click="closeTheArea" src="../../../static/icon/toBack.png"/>
					所在地区
				</div>
				<div class="haveSelected">
					<span class="area">浙江</span><span class="area">杭州</span><span class="area">滨江</span><span class="wraing">请选择</span>  
				</div>
				<div class="listCon">
					<div class="list" @click="selectTheArea">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list" @click="selectTheArea">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list" @click="selectTheArea">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
					<div class="list">
						北京
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data (){
			return {
				areaModel:false,
				formData:{
					name:'',
					phone:'',
					areaName:'',
					detailArea:'',
					isDefalut:false,
				},
				areaArr:[
					{
						id:1,
						name:"北京",
						
					}
				]
			}
		},
		methods:{
			openSelectTheArea(){
				console.log("打开选择地区");
				this.areaModel = true;
			},
			selectTheArea(){
				console.log("选择地区");
			},
			closeTheArea(){
				console.log("关闭");
				this.areaModel = false;
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	.selectArea{
		z-index: 100;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.3);
		.areaCon{
			width: 7.5rem;
			height: 9rem;
			position: absolute;
			bottom: 0;
			background-color: #ffffff;
			.title{
				width: 7.5rem;
				height: 1rem;
				line-height: 1rem;
				opacity: 1;
				background: rgba(248,248,248,1);
				font-size: 0.3rem;
				font-family: PingFang SC;
				color: rgba(28,28,28,1);
				font-weight: 700;
				position: relative;
				img{
					width: 0.17rem;
					height: 0.30rem;
					position: absolute;
					top: 0.35rem;
					left: 0.40rem;
				}
			}
			.haveSelected{
				width: 6.7rem;
				height: 0.9rem;
				line-height: 0.9rem;
				border-bottom: 0.01rem rgba(229,229,229,1) solid;
				margin: 0 auto;
				font-size: 0.3rem;
				text-align: left;
				font-family: PingFang SC;
				.area{
					padding-right: 1rem;
				}
				.wraing{
					color: rgba(187,187,187,1);
				}
			}
			
			.listCon{
				width: 7.5rem;
				height: 7.1rem;
				overflow: scroll;
				font-size: 0.28rem;
				font-family: PingFang SC;
				color: rgba(28,28,28,1);
				line-height: 0.46rem;
				padding-top: 0.2rem;
				.list{
					width: 6.42rem;
					height: 0.66rem;
					line-height: 0.66rem;
					margin: 0 auto;
					text-align: left;
				}
			}
		}
	}
	.l1{
		background-color: #ffffff;
	}
	.interval{
		width: 7.5rem;
		height: 0.2rem;
		background: rgba(248,248,248,1);
	}
	.l2{
		width: 7.5rem;
		padding:0.6rem 0.4rem;
		background-color: #fff;
		margin-top: 0.2rem;
		.label{
			font-size: 0.28rem;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
			input[type="radio"]{
				width: 1rem;
				height: 0.5rem;
				line-height: 0.5rem;
			}
			.list{
				width: 1rem;
				height: 0.5rem;
				line-height: 0.5rem;
				padding: 0rem;
				opacity: 1;
				border: 0.01rem rgba(221,225,225,1) solid ;
				border-radius: 0.03rem;
				margin-left: 0.5rem;
			}
		}
		.defalut{
			margin-top: 0.6rem;
			font-size: 0.30rem;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
		}
	}
	input{
		border: none;
		width: 6.7rem;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 0.01rem rgba(229,229,229,1) solid;
		font-size: 0.3rem;
		font-family: PingFang SC;
		color: rgba(28,28,28,1);
		letter-spacing: 0px;
	}
	input[disabled="disabled"]{
		background-color: #fff;
	}
	input:focus{
		outline: none;
	}
</style>