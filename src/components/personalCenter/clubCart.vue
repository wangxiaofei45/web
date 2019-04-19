<template>
	<div class="clubCart">
		<img class="topImg" src="../../../static/img/img_yyt_hyk.png" alt="">
		<!--推荐的会员卡 -->
		<div class="recommendedMembershipCard">
			<img class="shopLogo" src="../../../static/img/demo.jpg" alt="">
			<div class="shopNameCon flex_center">
				<img src="../../../static/icon/clubCart/img_l_jbt_hyk.png" alt="">
				<div class="shopName">
					XXXXX门店
				</div>
				<img src="../../../static/icon/clubCart/img_r_jbt_hyk.png" alt="">
			</div>
			<div class="bottom flex_center">
				<div class="list noCare">
					不感兴趣
				</div>
				<div class="list jionAtOnce">
					立即加入
				</div>
			</div>
		</div>
		<!-- 我的会员卡 -->
		<div class="memberCart">
			<div class="title">
				我的会员卡
			</div>
			<div class="list list1">
				<div class="left">
					<div class="number">
						3<span class="lettle">%</span> <span class="text">豆子返利/满500使用</span>
					</div>
					<div class="shopName">
						XXXXX天恒店
					</div>
				</div>
				<div class="vipLeval">
					普通会员
				</div>
				<div class="right">
					<div class="time">
						有效期限
					</div>
					<div class="time">
						2019.03.16-202001.02
					</div>
				</div>
			</div>
			<div class="list list2">
				<div class="left">
					<div class="number">
						35<span class="lettle">%</span> <span class="text">豆子返利/满500使用</span>
					</div>
					<div class="shopName">
						XXXXX天恒店
					</div>
				</div>
				<div class="vipLeval">
					普通会员
				</div>
				<div class="right">
					<div class="time">
						有效期限
					</div>
					<div class="time">
						2019.03.16-202001.02
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.topImg{
		width: 7.5rem;
		height: 2.4rem;
		margin-bottom: 0.6rem;
	}
	.memberCart{
		width: 7.1rem;
		margin: auto;
		.title{
			font-size: 0.3rem;
			padding-top: 0.5rem;
			padding-bottom: 0.35rem;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(28,28,28,1);
			text-align: left;
		}
		.list{
			width: 7.1rem;
			height: 2.2rem;
			position: relative;
			margin-bottom: 0.20rem;
			.left{
				position: absolute;
				left: 0.4rem;
				top: 0.2rem;
				text-align: left;
				.number{
					font-size: 0.8rem;
					font-family: Arial Black;
					
					.lettle{
						font-size: 0.3rem;
						font-family: Arial Black;
						
					}
					.text{
						font-weight: 400;
						font-size: 0.24rem;
						font-family: PingFang SC;
					}
				}
				.shopName{
					font-size: 0.32rem;
					font-weight: Bold;
					font-family: PingFang SC;
				}
			}
			.right{
				position: absolute;
				bottom: 0.4rem;
				right: 0.25rem;
				text-align: right;
				.time{
					font-size: 0.2rem;
					font-family: PingFang SC;
					font-weight: 200;
				}
			}
		}
		.list1{
			background:url(../../../static/icon/clubCart/img_hcard_hyk.png) no-repeat;
			background-size: cover;
			color: rgba(246,185,125,1);
			.vipLeval{
					background-color: rgba(246,185,125,1);
					width: 2rem;
					height: 0.5rem;
					line-height: 0.5rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(80,83,96,1);
					position: absolute;
					top: 0.5rem;
					right: 0rem;
					border-top-left-radius: 0.25rem;
					border-bottom-left-radius: 0.25rem;
				}
			
		}
		.list2{
			background:url(../../../static/icon/clubCart/img_jcard_hyk.png) no-repeat;
			background-size: cover;
			color: #ffffff;
			.vipLeval{
					background-color: rgba(80,83,96,1);
					width: 2rem;
					height: 0.5rem;
					line-height: 0.5rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					font-weight: bold;
					position: absolute;
					top: 0.5rem;
					right: 0rem;
					border-top-left-radius: 0.25rem;
					border-bottom-left-radius: 0.25rem;
				}
			
		}
	}
	//推荐的会员卡
	.recommendedMembershipCard{
		width: 7.1rem;
		height: 3.24rem;
		margin: auto;
		background-image: url(../../../static/icon/clubCart/img_tjcard_hyk.png);
		background-size: cover;
		.shopLogo{
			width: 1.24rem;
			height: 1.24rem;
			border-radius: 0.62rem;
			background-color: red;
			position: absolute;
			left: 50%;
			margin-left: -0.62rem;
			margin-top: -0.22rem;
		}
		.shopNameCon{
			padding-top: 1.4rem;
			.shopName{
				font-size: 0.36rem;
				padding: 0rem 0.25rem;
				font-family: PingFang SC;
				color: rgba(246,185,125,1);
				box-shadow: 0px 5px 7px 0px rgba(28,27,32,0.23);
			}
			img{
				width: 1.66rem;
				height: 0.03rem;
			}
		}
		.bottom{
			margin-top: 0.4rem;
			font-size: 0.30rem;
			font-family: PingFang SC;
			.list{
				width: 2rem;
				height: 0.6rem;
				line-height: 0.6rem;
				border-radius: 0.30rem;
				border-radius: 0.3rem;
			}
			.jionAtOnce{
				margin-left: 0.25rem;
				background-color: rgba(246,185,125,1);
				color: rgba(87,88,96,1);
			}
			.noCare{
				border: 0.01rem solid rgba(231,175,122,1);
				color: rgba(246,185,125,1);
			}
		}
	}
</style>