<template>
	<div class="registerForm">
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
					v-model="password"
					placeholder="请输入密码"
				/>
			</div>

			<div class="errorMsg">
				<i> </i>
			</div>
			<button class="submit" @click.prevent="handleRegister">
				注册账号
			</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'register',
	data() {
		return {
			phone: null,
			password: null,
		}
	},
	methods: {
		async handleRegister() {
			let result = await this.$API.getRegister(this.phone, this.password)
			if (result.data.code === 200) {
				this.$message.success(result.data.msg)
				setTimeout(() => {
					this.$router.push('/')
				}, 300);
			} else {
				this.$message.error(result.data.msg)
			}
		},
	},
}
</script>

<style  lang='less'  rel='stylesheet/less' scoped >
.registerForm {
	width: 100%;
	display: flex;
	justify-content: center;
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
		width: 278px;
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
