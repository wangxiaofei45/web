<template>
	<div id="personal">
		<div class="header flex_start">
			<router-link to="/personalCenter/personalData">
				<img src="../../assets/bg.jpg" />
			</router-link>
			<div class="center">
				<div class="name">王XX</div>
				<div class="lastTime">权益卡于2013年6月9日到期</div>
			</div>
			<div class="right">
				权益卡
				<img src="../../../static/icon/toRightY.png" />
			</div>
		</div>
		<!--累计收益 金额 豆子 关店铺-->
		<div class="property flex_center">
			<div class="list">
				<div class="title">
					累计收益
				</div>
				<div class="number">
					13123.23
				</div>
			</div>
			<div class="list">
				<div class="title">
					余额
				</div>
				<div class="number">
					13123.23
				</div>
			</div>
			<div class="list">
				<div class="title">
					豆子
				</div>
				<div class="number">
					13123.23
				</div>
			</div>
			<div class="list">
				<div class="title">
					关注店铺
				</div>
				<div class="number">
					13123.23
				</div>
			</div>
		</div>
		<div class="equities">
			<div class="cart">
				领取权益卡，享受更多福利
			</div>
		</div>
		<!--订单-->
		<div class="indent">
			<div class="title flex_between">
				<div class="left">我的订单</div>
				<div class="right flex_end">查看全部 <img src="../../../static/icon/toRightB.png" /></div>
			</div>
			<div class="listCon flex_around">
				<div class="lists">
					<img src="../../../static/icon/icon_yyy_wd@2x.png" />
					<div class="text">
						已预约
					</div>
				</div>
				<div class="lists">
					<img src="../../../static/icon/icon_dfk_wd@2x.png" />
					<div class="text">
						代付款
					</div>
				</div>
				<div class="lists">
					<img src="../../../static/icon/icon_dsh_wd@2x.png" />
					<div class="text">
						待收货
					</div>
				</div>
				<div class="lists">
					<img src="../../../static/icon/icon_dpj_wd@2x.png" />
					<div class="text">
						待评价
					</div>
				</div>
				<div class="lists">
					<img src="../../../static/icon/icon_thsh_wd@2x.png" />
					<div class="text">
						退款售后
					</div>
				</div>
			</div>
		</div>
		<!--卡券-->
		<div class="indent">
			<div class="title flex_between">
				<div class="left">卡券</div>
				<router-link to="/personalCenter/clubCart">
					<div class="right flex_end">  查看全部 <img src="../../../static/icon/toRightB.png" /></div>
				</router-link>
			</div>
			<div class="rollingCard">
				<div class="rollingCardCon">
					<div class="list list1">
						<div class="l1 flex_between">
							<div class="number">
								30<span class="small">%</span>
							</div>
							<div class="line"></div>
							<div class="shopName">
								<div class="name">
									店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称
								</div>
								<div class="condition">
									满300使用店铺名称店铺名称店铺名称
								</div>
							</div>
						</div>
						<div class="time">
							有效期限2013-12-12
						</div>
					</div>
					<div class="list list2">
							<div class="l1 flex_between">
								<div class="number">
									30<span class="small">%</span>
								</div>
								<div class="line"></div>
								<div class="shopName">
									<div class="name">
										店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称店铺名称
									</div>
									<div class="condition">
										满300使用店铺名称店铺名称店铺名称
									</div>
								</div>
							</div>
							<div class="time">
								有效期限2013-12-12
							</div>
					</div>
					<div class="list list2">

					</div>
				</div>

			</div>
		</div>
		<!--银行卡 帮助中心 在线客服 设置列表-->
		<div class="functionList flex_center_wrap">
			<router-link to="/personalCenter/bankCard">
				<div class="list flex_between">
					<div class="left flex_start">
						<img src="../../../static/icon/icon_yhk_wd@2x.png" /> 银行卡
					</div>
					<img class="right" src="../../../static/icon/toRightB.png" />
				</div>
			</router-link>
			<div class="list flex_between">
				<div class="left flex_start">
					<img src="../../../static/icon/icon_bzzx_wd@2x.png" /> 帮助中心
				</div>
				<img class="right" src="../../../static/icon/toRightB.png" />
			</div>
			<div class="list flex_between">
				<div class="left flex_start">
					<img src="../../../static/icon/icon_zxkf_wd@2x.png" /> 在线客服
				</div>
				<img class="right" src="../../../static/icon/toRightB.png" />
			</div>
			<div class="list flex_between">
				<div class="left flex_start">
					<img src="../../../static/icon/icon_sz_wd@2x.png" /> 设置
				</div>
				<img class="right" src="../../../static/icon/toRightB.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				message:"哈哈",
			}
		},
		created(){
			this.userRegister();
		},
		methods:{
			userRegister(){
				this.$post(this.$userRegister,{}).then((res) =>{
					if(res.status_code == 0){
						
					}
				})
			}
		},
	}
</script>

<style lang="less" scoped="scoped">
	#personal {
		width: 7.5rem;
		overflow: hidden;
		background: rgba(248, 248, 248, 1);
		margin-bottom: 1rem;
		/*我的订单*/
		.indent {
			background-color: #FFFFFF;
			margin-bottom: 0.2rem;
			.title {
				width: 7.1rem;
				height: 1.3rem;
				margin: auto;
				.left {
					font-size: 0.3rem;
					color: rgba(28, 28, 28, 1);
					font-weight: bolder;
				}
				.right {
					font-size: 0.26rem;
					font-family: PingFang SC;
					color: rgba(28, 28, 28, 1);
					img {
						width: 0.1rem;
						height: 0.18rem;
						margin-left: 0.1rem;
					}
				}
			}
			/*左右滚动的卡券*/
			.rollingCard {
				width: 7.5rem;
				height: 2.22rem;
				overflow-y:scroll;
				.rollingCardCon {
					padding: 0rem 0.1rem;
					width: 15rem;
					height: 2.22rem;
					.list {
						width: 3.4rem;
						height: 2.22rem;
						padding: 0.30rem 0.15rem 0rem;
						margin-right: 0.10rem;
						float: left;
					}
					.list1 {
						background: url(../../../static/icon/img_fashion_wd@2x.png) no-repeat;
						background-size: cover;
						color: rgba(246,185,125,1);
						.l1{
							.number{
								font-size: 0.60rem;
								width: 1.1rem;
								.small{
									font-size: 0.24rem;
								}
							}
							.line{
								width: 0.01rem;
								height: 0.3rem;
								background: rgba(246,185,125,1);
							}
							.shopName{
								width: 2rem;
								text-align: left;
								padding-left: 0.15rem;
								.name{
									font-size: 0.28rem;
									 overflow:hidden;
									text-overflow:ellipsis;
									white-space:nowrap
								}
								.condition{
									font-size: 0.18rem;
									 overflow:hidden;
									text-overflow:ellipsis;
									white-space:nowrap
								}
							}
						}
						
						.time{
							font-size: 0.18rem;
							font-weight: lighter;
							text-align: left;
						}
					}
					.list2 {
						background: url(../../../static/icon/img_delicious_wd@2x.png) no-repeat;
						background-size: cover;
						color: rgba(255,255,255,1);
						.l1{
							.number{
								font-size: 0.60rem;
								width: 1.1rem;
								.small{
									font-size: 0.24rem;
								}
							}
							.line{
								width: 0.01rem;
								height: 0.3rem;
								background: rgba(255,255,255,1);
							}
							.shopName{
								width: 2rem;
								text-align: left;
								padding-left: 0.15rem;
								.name{
									font-size: 0.28rem;
									 overflow:hidden;
									text-overflow:ellipsis;
									white-space:nowrap
								}
								.condition{
									font-size: 0.18rem;
									 overflow:hidden;
									text-overflow:ellipsis;
									white-space:nowrap
								}
							}
						}
						
						.time{
							font-size: 0.18rem;
							font-weight: lighter;
							text-align: left;
						}
					}
				}
			}
			/*已预约 代付款 待收货 待评价 退款 售后*/
			.listCon {
				width: 7.1rem;
				margin: auto;
				padding-bottom: 0.50rem;
				.lists {
					width: 20%;
					font-size: 0.24rem;
					font-family: PingFang SC;
					color: rgba(28, 28, 28, 1);
					img {
						width: 0.46rem;
						height: 0.36rem;
						margin-bottom: 0.40rem;
					}
				}
			}
		}
		/*权益卡*/
		.equities {
			width: 7.5rem;
			background-color: #FFFFFF;
			.cart {
				width: 7.1rem;
				height: 1.1rem;
				line-height: 1.1rem;
				background-image: url(../../../static/icon/img_qykbg_wd@2x.png);
				background-size: cover;
				margin: auto;
				font-size: 0.38rem;
				font-weight: 700;
				color: rgba(255, 255, 255, 1);
			}
		}
		/*头部 个人信息*/
		.header {
			box-sizing: border-box;
			padding-left: 0.4rem;
			position: relative;
			background: #ffffff;
			padding-top: 0.42rem;
			img {
				width: 1rem;
				height: 1rem;
				display: block;
				border-radius: 50%;
				margin-right: 0.40rem;
			}
			.center {
				text-align: left;
				.name {
					font-size: 0.34rem;
					line-height: 0.46rem;
					font-weight: blod;
				}
				.lastTime {
					font-size: 0.24rem;
					line-height: 0.44rem;
					color: rgba(120, 120, 120, 1);
				}
			}
			.right {
				width: 1.4rem;
				height: 0.5rem;
				text-align: center;
				border-top-left-radius: 0.25rem;
				border-bottom-left-radius: 0.25rem;
				background-image: linear-gradient(to right, #525663, #313036);
				position: absolute;
				top: 0.42rem;
				right: 0rem;
				font-size: 0.24rem;
				line-height: 0.5rem;
				color: rgba(231, 168, 107, 1);
				img {
					display: inline-block;
					width: 0.1rem;
					height: 0.18rem;
					margin: 0;
				}
			}
		}
		/*累计收益 余额 豆子 关注店铺*/
		.property {
			width: 7.5rem;
			background-color: #FFFFFF;
			padding-top: 0.6rem;
			padding-bottom: 0.5rem;
			.list {
				width: 25%;
				.title {
					font-size: 0.24rem;
					font-family: PingFang SC;
					color: rgba(28, 28, 28, 1);
				}
				.number {
					font-size: 0.3rem;
					margin-top: 0.3rem;
					font-weight: 700;
				}
			}
		}
		/*银行卡 帮助中心 在线客服 设置*/
		.functionList {
			width: 7.5rem;
			background-color: #ffffff;
			margin-top: 0.2rem;
			.list {
				width: 6.7rem;
				height: 1rem;
				border-bottom: 0.01rem solid rgba(229, 229, 229, 1);
				.left {
					font-size: 0.30rem;
					color: rgba(28, 28, 28, 1);
					img {
						width: 0.34rem;
						height: 0.34rem;
						margin-right: 0.42rem;
					}
				}
				.right {
					width: 0.10rem;
					height: 0.18rem;
				}
			}
		}
	}
</style>