<template>
	<div class="dialog">
		<div class="loginContainer">
			<div class="loginCard">
				<div class="tabHeader">
					<div class="tab_tap">
						<span
							class="tabItem"
							@click="isAcount = true"
							:class="isAcount ? 'active' : ''"
							>账号登录</span
						>
						<span
							class="tabItem"
							@click="isAcount = false"
							:class="isAcount ? '' : 'active'"
							>快捷登录</span
						>
					</div>

					<i
						class="sui-icon icon-tb-close"
						@click="$emit('closeLogin')"
					></i>
				</div>
				<!-- 账号登录部分 -->
				<div class="acountLogin" :class="isAcount ? 'active' : ''">
					<img
						src="https://h5static.kuwo.cn/www/kw-www/img/login_bg2.69c4644.png"
						alt=""
					/>
					<div class="loginForm">
						<form>
							<div class="form_item">
								<i class="sui-icon icon-touch-user"></i>
								<input
									type="text"
									placeholder="用户名/手机号/邮箱"
									v-model="phone"
								/>
							</div>
							<div class="form_item">
								<i class="sui-icon icon-tb-lock"></i>
								<input
									type="password"
									name="passaword"
									v-model="psw"
								/>
								<a href="javascript:;" class="forgetPsw"
									>忘记密码</a
								>
							</div>
							<div class="form_item">
								<i class="sui-icon icon-tb-emoji"></i>
								<input
									type="text"
									name="verifyCode"
									placeholder="请输入验证码"
									v-model="code"
								/>
							</div>
							<div class="autoLogin_out">
								<div class="ckeckAutoLogin">
									<input
										type="checkbox"
										name="check"
										id="autoLogin"
									/>
									<label for="autoLogin">自动登录</label>
								</div>

								<span>注册账号</span>
							</div>
							<div class="errorMsg" ref="errorMsg">
								<i> </i>
							</div>
							<button class="submit" @click.prevent="handleLogin">
								登录
							</button>
						</form>
					</div>
				</div>
				<!-- 快捷登录部分 -->
				<div class="quickLogin" :class="isAcount ? '' : 'active'">
					<img
						src="https://h5static.kuwo.cn/www/kw-www/img/login_bg.d574162.png"
						alt=""
					/>
					<form>
						<div class="formItem">
							<i class="sui-icon icon-touch-phone"></i>
							<input
								type="text"
								class="telphone"
								placeholder="请输入手机号码"
							/>
						</div>
						<div class="formItem">
							<i class="sui-icon icon-tb-qrcode"></i>
							<input
								type="text"
								class="code1"
								placeholder="请输入验证码"
							/>
						</div>
						<div class="formItem">
							<i class="sui-icon icon-tb-qrcode"></i>
							<input
								type="text"
								class="code2"
								placeholder="请输入验证码"
							/>
							<button class="sendCode">获取验证码</button>
						</div>
						<div class="register">注册账号</div>
						<div class="errorMsg"><P></P></div>
						<button class="loginBtn">登录</button>
					</form>
				</div>
				<div class="loginFooter">
					<span class="text">其它方式登录</span>
					<div class="otherLogin">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			isAcount: true,
			phone: null,
			psw: null,
			code: 1234,
		}
	},
	methods: {
		async handleLogin() {
			const result = await this.$API.getLogin(this.phone, this.psw)
			if (result.data.code === 200) {
				this.$message.success(result.data.msg)
				this.$emit('closeLogin')
			} else {
				this.$refs.errorMsg.innerText = '账户密码错误'
			}
		},
	},
	watch:{
		phone(){
			this.$refs.errorMsg.innerText="账号密码错误"
		}
	}
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
.dialog {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 10010;
	.loginContainer {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 360px;
		height: 540px;
		background: #fff;
		border: 1px solid red;
		.loginCard {
			position: relative;
			overflow: hidden;
			height: 100%;
		}
	}
}
.tabHeader {
	display: flex;
	margin-top: 3px;
	height: 50px;
	padding: 0 22px;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	.tab_tap {
		display: flex;
		align-items: center;
		span {
			position: relative;
			margin-right: 27px;
			height: 100%;
			line-height: 49px;
			font-size: 16px;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.6);
			cursor: pointer;
			&.active {
				font-weight: 600;
				color: rgba(0, 0, 0, 0.8);
			}
			&.active::after {
				position: absolute;
				content: ' ';
				left: 12px;
				height: 2px;
				width: 40px;
				background-color: #ffd200;
				bottom: 0;
			}
		}
	}
	.sui-icon {
		font-weight: 600;
		font-size: 22px;
		cursor: pointer;
	}
}
.acountLogin {
	padding: 0 41px;
	display: none;
	&.active {
		display: block;
	}
	img {
		width: 100%;
		margin-top: 7px;
		margin-bottom: 10px;
	}
	.loginForm {
		width: 100%;
		.form_item {
			position: relative;
			margin-bottom: 9px;
			input {
				width: 278px;
				height: 40px;
				padding: 0 100px 0 34px;
				border-radius: 2px;
				border: 1px solid rgba(0, 0, 0, 0.1);
				box-sizing: border-box;
				outline: none;
			}
			.sui-icon {
				position: absolute;
				top: 10px;
				left: 12px;
				font-size: 16px;
				color: rgba(0, 0, 0, 0.5);
			}
			.forgetPsw {
				position: absolute;
				right: 15px;
				top: 13px;
				padding-left: 18px;
				border-left: 1px solid #d4d4d4;
				color: rgba(0, 0, 0, 0.6);
			}
		}
		.autoLogin_out {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			.ckeckAutoLogin {
				input {
					transform: translateY(1px);
					margin-right: 5px;
				}
			}
		}

		.submit {
			display: inline-block;
			margin-top: 10px;
			width: 100%;
			height: 40px;
			line-height: 38px;
			background: #ffe200;
			text-align: center;
			border-radius: 2px;
			color: rgba(0, 0, 0, 0.8);
			font-size: 16px;
			border: none;
			cursor: pointer;
		}
	}
}
.errorMsg {
	color: #ec1e1e;
	height: 24px;
	line-height: 24px;
}
.loginFooter {
	span.text {
		position: relative;
		display: block;
		width: 104px;
		height: 17px;
		margin: 10px auto 0;
		text-align: center;
		background: #fff;
		color: rgba(0, 0, 0, 0.4);
		font-size: 12px;
		&::before {
			position: absolute;
			content: ' ';
			top: 7px;
			left: -110px;
			width: 110px;
			height: 1px;
			background: rgba(0, 0, 0, 0.06);
		}
		&::after {
			position: absolute;
			content: ' ';
			top: 7px;
			right: -110px;
			width: 110px;
			height: 1px;
			background: rgba(0, 0, 0, 0.06);
		}
	}
	.otherLogin {
		width: 230px;
		margin: 12px auto 0;
		justify-content: space-between;
		display: flex;
		align-items: center;
		span {
			position: relative;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			border: 1px solid rgba(0, 0, 0, 0.06);
			cursor: pointer;
			overflow: hidden;
			background: url(https://h5static.kuwo.cn/www/kw-www/img/img.f1b1f82.png)
				no-repeat;
			background-size: 70%;
			&:first-child {
				background-position: 7px -98px;
			}
			&:nth-of-type(2) {
				background-position: 7px -28px;
			}
			&:last-child {
				background-position: 7px 5px;
			}
		}
	}
}
.quickLogin {
	padding: 0 41px;
	display: none;
	&.active {
		display: block;
	}
	img {
		width: 100%;
	}
	.formItem {
		margin-bottom: 9px;
		position: relative;

		input {
			width: 100%;
			padding: 0 100px 0 34px;
			box-sizing: border-box;
			height: 40px;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 2px;
			outline: none;
			&.code2 {
				width: 167px;
				height: 40px;
				padding: 0 0 0 34px;
			}
		}
		.sendCode {
			width: 102px;
			height: 40px;
			text-align: center;
			line-height: 40px;
			background: #ffe200;
			border-radius: 2px;
			color: #333;
			margin-left: 9px;
			cursor: pointer;
			border: none;
		}
		.sui-icon {
			position: absolute;
			top: 12px;
			left: 12px;
			font-size: 16px;
			color: rgba(0, 0, 0, 0.5);
		}
	}
	.register {
		text-align: right;
	}
	.loginBtn {
		display: inline-block;
		width: 100%;
		height: 40px;
		line-height: 38px;
		background: #ffe200;
		text-align: center;
		border-radius: 2px;
		color: rgba(0, 0, 0, 0.8);
		font-size: 16px;
		border: none;
		cursor: pointer;
	}
}
</style>
