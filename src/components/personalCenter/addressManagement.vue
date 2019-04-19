<template>
	<div class="addressManagement">
		<div class="listCon" v-if="addressList.length">
			<div class="list" v-for="(item,index) in addressList">
				<div class="l1 flex_between">
					<div class="left flex_start">
						<div class="name">
							{{item.name}}
						</div>
						<div class="phone">
							{{item.phone}}
						</div>
						<div class="isHome" v-if="item.isHome">
							家
						</div>
						<div class="isCompany" v-if="item.isCompany">
							公司
						</div>
						<div class="isdefault" v-if="item.isDefault">
							默认
						</div>
					</div>
					<div class="right flex_end">
						<router-link to="/personalCenter/modificationAddress">
							<img src="../../../static/icon/icon_bj_wddz@2x.png"/>
						</router-link>
					</div>
				</div>
				<div class="l2">
					{{item.adress}}
				</div>
			</div>
			<router-link to="/personalCenter/theNewAddress">
				<el-button>
					新增地址
				</el-button>
			</router-link>
		</div>
		<div class="none" v-else>
			<img src="../../../static/icon/icon_zwshdz_dw@2x.png"/>
			<div class="text">
				暂无地址
			</div>
			<el-button name="newAddress">
				新增地址
			</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				addressList:[
					{
						id:1,
						name:'王XX',
						phone:"15736748889",
						isCompany:true,
						isHome:false,
						isDefault:false,
						adress:"浙江省杭州市滨江区天恒大厦1505"
					},
					{
						id:2,
						name:'王XX',
						phone:"15736748889",
						isCompany:false,
						isHome:false,
						isDefault:false,
						adress:"浙江省杭州市滨江区天恒大厦1505"
					},
					{
						id:3,
						name:'王XX',
						phone:"15736748889",
						isCompany:false,
						isHome:true,
						isDefault:true,
						adress:"浙江省杭州市滨江区天恒大厦1505浙江省杭州市滨江区天恒大厦1505浙江省杭州市滨江区天恒大厦1505"
					}
				]
			}
		},
		created(){
			this.formatting();
		},
		methods:{
			//格式化电话显示的格式
			formatting(){
				for(let i=0;i<this.addressList.length;i++){
					this.addressList[i].phone = this.addressList[i].phone.substr(0, 3) + '****' + this.addressList[i].phone.substr(7);   
				}
			}
		}
	}
</script>
<style type="text/css">
	.el-button[name="newAddress"]{
		width: 2rem;
		opacity: 1;
		background: rgba(49,48,54,1);
		font-size: 0.3rem;
		font-family: PingFang SC;
		color: rgba(255,255,255,1);
	}
</style>
<style scoped="scoped" lang="less">
	.listCon{
		padding-top: 0.22rem;
		.list{
			width: 6.7rem;
			border-bottom: 0.01rem solid rgba(229,229,229,1);
			margin: 0 auto;
			padding: 0.4rem 0rem 0.2rem;
			.l1{
				margin-bottom: 0.2rem;
				.name{
					font-size: 0.28rem;
					font-family: PingFang SC;
					color: rgba(28,28,28,1);
					margin-right: 0.24rem;
					font-weight: Bold;
				}
				.phone{
					font-size: 0.28rem;
					font-family: Arial;
					color: rgba(28,28,28,1);
					margin-right: 0.1rem;
					font-weight: Bold;
				}
				.isHome{
					width: 0.7rem;
					height: 0.36rem;
					background: rgba(250,80,45,1);
					width: 40px;
					font-size: 0.22rem;
					font-family: PingFang SC;
					color: rgba(254,254,254,1);
					margin-right: 0.1rem;
				}
				.isCompany{
					width: 0.7rem;
					height: 0.36rem;
					background: rgba(250,80,45,1);
					width: 40px;
					font-size: 0.22rem;
					font-family: PingFang SC;
					color: rgba(254,254,254,1);
					margin-right: 0.1rem;
				}
				.isdefault{
					width: 0.7rem;
					height: 0.36rem;
					background: rgba(49,48,54,1);
					width: 40px;
					font-size: 0.22rem;
					font-family: PingFang SC;
					color: rgba(254,254,254,1);
				}
				img{
					width: 0.32rem;
					height: 0.32rem;
				}
			}
			.l2{
				width: 5.4rem;
				font-size: 0.28rem;
				font-family: PingFang SC;
				color: rgba(28,28,28,1);
				line-height: 0.46rem;
				text-align: left;
			}
		}
	}
	.none{
		img{
			width: 2.32rem;
			height: 1.69rem;
			opacity: 1;
			margin-top: 2.56rem;
		}
		.text{
			margin-top: 1.42rem;
			margin-bottom: 1rem;
			font-size: 0.3rem;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
			line-height: 0.46rem;
			font-weight: 700;
		}
		
	}
</style>