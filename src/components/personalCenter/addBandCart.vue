<template>
	<div class="addBandCart">
		<div class="listCon">
			<div class="list flex_start">
				<div class="left">姓名</div>
				<div class="right">
					<input placeholder="请输入真实姓名" type="" name="" id="" value="" />
				</div>
			</div>
			<div class="list flex_start">
				<div class="left">身份证号</div>
				<div class="right">
					<input placeholder="请输入身份证号" type="" name="" id="" value="" />
				</div>
			</div>
			<div class="list flex_start">
				<div class="left">卡号</div>
				<div class="right">
					<input placeholder="请输入你的银行卡号" type="" name="" id="" value="" />
				</div>
			</div>
			<div class="list flex_start">
				<div class="left">预留手机</div>
				<div class="right">
					<input placeholder="请输入银行预留手机号" type="" name="" id="" value="" />
				</div>
			</div>
			<div class="list flex_start">
				<div class="left">验证码</div>
				<div class="right" id="verificationCode">
					<input placeholder="请输入短信验证码" type="" name="" id="" value="" />
					<div class="verificationCode">
						获取验证码
					</div>
				</div>
			</div>
			<div class="supportedBanks flex_start">
				<img src="../../../static/icon/icon_yhk_tjyhk@2x.png"/>查看支持的银行
			</div>
			<div class="summit">提交</div>
			<div class="agreement">
				<el-checkbox style="margin: 0px;" v-model="checked">我已阅读并同意</el-checkbox><span class="yellow">《代扣授权书》</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				checked:"",
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.listCon {
		.list {
			width: 6.7rem;
			height: 1rem;
			margin: 0 auto;
			border-bottom: 0.01rem rgba(229, 229, 229, 1) solid;
			.left {
				width: 1.9rem;
				text-align: left;
				font-size: 0.3rem;
				font-family: PingFang SC;
				color: rgba(28, 28, 28, 1);
			}
			.right {
				width: 4.8rem;
				input {
					display: block;
				}
			}
			#verificationCode{
				position: relative;
				.verificationCode{
					position: absolute;
					right: 0rem;
					top: 0.2rem;
					width: 2rem;
					height: 0.6rem;
					line-height: 0.6rem;
					border: 0.01rem rgba(191,191,191,1) solid;
					border-radius: 0.3rem;
					font-size: 0.3rem;
					font-family: PingFang SC;
					color: rgba(28,28,28,1);
				}
			}
		}
		.supportedBanks{
			width: 6.7rem;
			margin: auto;
			margin-top: 0.4rem;
			margin-bottom: 1rem;
			font-size: 0.24rem;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
			text-align: left;
			img{
				width: 0.3rem;
				height: 0.26rem;
				margin-right: 0.2rem;
			}
		}
		.summit{
			width: 6.7rem;
			height: 1rem;
			line-height: 1rem;
			margin: auto;
			background: rgba(49,48,54,1);
			font-size: 0.3rem;
			font-family: PingFang SC;
			color: rgba(255,255,255,1);
			letter-spacing: 0.1rem;
			margin-bottom: 0.4rem;
		}
		.agreement{
			font-size: 0.24rem;
			font-family: PingFang SC;
			color: rgba(28,28,28,1);
			.yellow{
				color: rgba(250,80,45,1);
			}
		}
	}
	
	input {
		border: none;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 0.01rem rgba(229, 229, 229, 1) solid;
		font-size: 0.3rem;
		font-family: PingFang SC;
		color: rgba(28, 28, 28, 1);
		letter-spacing: 0px;
	}
	
	input[disabled="disabled"] {
		background-color: #fff;
	}
	
	input:focus {
		outline: none;
	}
	
	input::-webkit-input-placeholder{
        color:rgba(187,187,187,1);
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:rgba(187,187,187,1);
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:rgba(187,187,187,1);
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
        color:rgba(187,187,187,1);
    }
</style>