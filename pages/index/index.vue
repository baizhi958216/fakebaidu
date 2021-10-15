<template>
	<view class="content">
		<image class="logo" src="https://gitee.com/baizhi958216/fakebaidu/raw/airo/static/webwxgetmsgimg.jpg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="clickBtn" plain="true" type="default" class="pwoff">关机</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎使用AIRo智能门禁系统'
			}
		},
		onLoad() {
		},
		methods: {
			clickBtn(){
				uni.showToast({
					title:"已关机"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.logo {
		height: 400rpx;
		width: 400rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.pwoff{
		position: absolute;
		margin-top: 1000rpx;
		margin-left: 300rpx;
	}
	.pwoff:active{
		background-color: rgba(32, 144, 248, 0.6);
	}
</style>
