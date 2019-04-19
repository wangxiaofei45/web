<template>
	<div class="bankCard">
		<div class="listCon" v-if="bankCardList.length">
			<div class="list flex_start_top" v-bind:class="[item.bandType == 1 ? list1 : 'list2']" v-for="(item,index) in bankCardList">
				<div class="left flex_start_top">
					<img v-if="item.bandType == 1" src="../../../static/icon/img_nhlogo_yhk@2x.png"/>
					<img v-if="item.bandType == 2" src="../../../static/icon/img_ghlogo_yhk@2x.png"/>
				</div>
				<div class="right">
					<div class="name">
						{{item.name}}
					</div>
					<div class="type">
						{{item.type}}
					</div>
					<div class="cartNumber">
						{{item.cardNumber}}
					</div>
				</div>
			</div>
		</div>
		<div class="none" v-else>
			<img src="../../../static/icon/img_zwyhk_yhk@2x.png"/>
			<div class="wraning">
				暂无银行卡
			</div>
			<div class="wraning2">
				您还没有绑定银行卡哦
			</div>
		</div>
		<el-button @click="goToAddCart">
			添加银行卡
		</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				bankCardList:[
					{
						id:1,
						name:'农业银行',
						type:'储蓄卡',
						cardNumber:'12345678901234',
						bandType:1,
					},
					{
						id:1,
						name:'工商银行',
						type:'储蓄卡',
						cardNumber:'12345678901234',
						bandType:2,
					},
				],
				list1:"list1",
			}
		},
		created(){
			this.formatBankNumber();
		},
		methods:{
			formatBankNumber(bankNumber){
				for(let i=0;i<this.bankCardList.length;i++){
				this.bankCardList[i].cardNumber = "****    		****        ****    "+this.bankCardList[i].cardNumber.substr(-4);
				}
			},
			//跳转到添加银行卡
			goToAddCart(){
				this.$router.push({
					path: '/personalCenter/addBandCart'
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
.bankCard{
	width: 7.5rem;
	.listCon{
		margin-top: 0.32rem;
	}	
	.list{
		width: 7.1rem;
		height: 2rem;
		padding: 0.3rem;
		margin: 0 auto;
		margin-bottom: 0.3rem;
		.left{
			img{
				width: 0.7rem;
				height: 0.7rem;
			}
		}
		.right{
			text-align: left;
			margin-left: 0.40rem;
			.name{
				font-size: 0.3rem;
				font-family: PingFang SC;
				color: rgba(255,255,255,1);
			}
			.type{
				font-size: 0.24rem;
				font-family: PingFang SC;
				color: rgba(255,255,255,1);
				margin-top: 0.05rem;
				margin-bottom: 0.15rem;
			}
			.cartNumber{
				font-size: 0.30rem;
				font-family: PingFang SC;
				color: rgba(255,255,255,1);
			}
		}
	}
	/*农业银行*/
	.list1{
		background-image: url(../../../static/icon/img_nyyh_yhk@2x.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	/*工商银行*/
	.list2{
		background-image: url(../../../static/icon/img_gsyh_yhk@2x.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.none{
		width:7.5rem;
		img{
			width: 2.14rem;
			height: 1.53rem;
			margin: 0 auto;
			margin-top: 1.2rem;
		}
		.wraning{
			font-size: 0.3rem;
			font-weight: bolder;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
			margin-top: 0.38rem;
			margin-bottom: 0.48rem;
		}
		.wraning2{
			font-size: 0.26rem;
			font-weight: lighter;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
		}

	}
}

</style>