<template>
	<div class="personalData">
		<div class="fromList">
			<div class="list flex_between">
				<div class="left">
					头像
				</div>
				<div class="right flex_end">
					<el-upload class="avatar-uploader" :multiple="true" action="http://up.qiniu.com/" accept="image/jpeg,image/gif,image/png,image/bmp" :data="postData" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
						<div class="upload_img">
							<img class="headPhoto" src="../../../static/img/bg.jpg" />
						</div>
					</el-upload>
					<img class="toRight" src="../../../static/icon/toRightB.png" />
				</div>
			</div>
			<router-link to="/personalCenter/modifyTheNickname">
			<div class="list flex_between">
				<div class="left">
					昵称
				</div>
				<div class="right flex_end">
					<img class="toRight" src="../../../static/icon/toRightB.png" />
				</div>
			</div>
			</router-link>
			<div class="list flex_between" @click="openSex">
				<div class="left">
					性别
				</div>
				<div class="right flex_end">
					<div class="sex">
						女
					</div>
					<img class="toRight" src="../../../static/icon/toRightB.png" />
				</div>
			</div>
			<div class="list flex_between" @click="setDate2">
				<div class="left">
					生日
				</div>
				<div class="right flex_end">
					<div class="birthday">
						{{date2}}
					</div>
					<img class="toRight" src="../../../static/icon/toRightB.png" />
				</div>
			</div>
			<!--个人简介-->
			<router-link to="/personalCenter/personalProfile">
				<div class="list flex_between">
					<div class="left">
						个人简介
					</div>
					<div class="right flex_end">
						<img class="toRight" src="../../../static/icon/toRightB.png" />
					</div>
				</div>
			</router-link>
			<!--地址管理-->
			<router-link to="/personalCenter/addressManagement">
				<div class="list flex_between">
					<div class="left">
						我的地址
					</div>
					<div class="right flex_end">
						<img class="toRight" src="../../../static/icon/toRightB.png" />
					</div>
				</div>
			</router-link>
		</div>
		<div class="modelSex" v-show="modelSex">
			<div class="sexPicker">
				<div class="sexPickerTitle flex_between">
					<div class="cancel" @click="cancelSex">
						取消
					</div>
					<div class="sure" @click="sureSex">
						确定
					</div>
				</div>
				<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
			</div>
		</div>
		
	</div>
</template>
<script>
	import { Picker } from 'mint-ui';
	export default {
		name: 'App',
		data() {
			return {
				modelSex:false,
				date2: '',
				postData:{},
				slots: [
			        {
			          flex: 1,
			          values: ['男', '女'],
			          className: 'slot1',
			          textAlign: 'center'
			        }
			      ]
			}
		},
		methods: {
			//选择性别
			openSex(){
				this.modelSex = true;
			},
			cancelSex(){
				this.modelSex = false;
			},
			sureSex(){
				this.modelSex = false;
			},
			 onValuesChange(picker, values) {
//			 	 console.log(values[0]);
			  if (values[0] > values[1]) {
			    picker.setSlotValue(1, values[0]);
			   
			  }
			},
			//选择生日
			setDate2() {
				this.$picker.show({
					type: 'datePicker',
					date: this.date2, //初始化时间
					endTime: '2019-01-01', //截至时间
					startTime: '1950-01-01', //开始时间
					onOk: (e) => {
						this.date2 = e;
					},

				})
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;
				this.postData.key = file.name; //上传时控制文件名
			},
			//上传图片成功  身份证与人合照
			handleAvatarSuccess(res, file) {
				console.log(res);
//				this.centerColor[this.UploadImgIndex].showImg = URL.createObjectURL(file.raw);
//				this.centerColor[this.UploadImgIndex].imgUrl = res.key;

			},
		},
	}
</script>

<style scoped="scoped" lang="less">
	.fromList {
		width: 7.5rem;
		.list {
			width: 6.7rem;
			height: 1rem;
			margin: 0 auto;
			border-bottom: 0.01rem solid rgba(229, 229, 229, 1);
			font-size: 0.3rem;
			.left {
				color: rgba(28, 28, 28, 1);
			}
			.right {
				.toRight {
					width: 0.1rem;
					height: 0.18rem;
					margin-left: 0.3rem;
				}
				.headPhoto {
					width: 0.6rem;
					height: 0.6rem;
					border-radius: 0.3rem;
				}
			}
		}
	}
	.modelSex{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0,0,0,0.3);
		.sexPicker{
			width: 7.5rem;
			background-color: #ffffff;
			position: absolute;	
			bottom: 0;
			.sexPickerTitle{
				padding: 0rem 0.4rem;
				box-sizing: border-box;
				width: 7.5rem;
				height: 1rem;
				background: rgba(248,248,248,1);
				color: rgba(28,28,28,1);
				font-size: 0.26rem;
			}
		}
	}
</style>