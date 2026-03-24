<template>
	<div id="homeView">
		<!-- 首页展示 -->
		<div class="h_introduce">
			<div class="h_shiba">
				<transition>
					<div class="h_text animate__animated animate__slideInUp">
						<h1>
							<span>{{ titleone }}</span>
							<br />
							<span>{{ titletwo }}</span>
						</h1>
					</div>
				</transition>
			</div>
			<!-- 企鹅卡片 -->
			<div class="h_penguin">
				<PenGuin />
			</div>
			<!-- 照片墙 -->
			<div class="h_dog ">
				<DogIntroduce />
			</div>
			<!-- 照片轮播图 -->
			<div class="carousel">
				<Carousel />
			</div>
			<!-- 底部footer -->
			<div class="footers">
				<NetherMost />
			</div>
		</div>
	</div>
</template>
<script setup>

import NetherMost from './home/NetherMost.vue'
import Carousel from './home/Carousel.vue';
import DogIntroduce from './home/DogIntroduce.vue';
import PenGuin from './home/PenGuin.vue';


const { titleone, titletwo } = {
	titleone: "Meet Your",
	titletwo: "Wild Neighbors",
}

</script>
<style lang="scss" scoped>
#homeView {
	.h_introduce {

		.h_shiba {
			width: 100vw;
			height: calc(100vh - 64px);
			background-image: url(../assets/images/bg_dog.jpg);
			// 	/* 确保图片覆盖容器，保持比例 */
			background-size: cover;
			/* 图片居中显示 */
			background-position: center center;
			background-repeat: no-repeat;
			/* 背景固定，创造视差效果 */
			background-attachment: fixed;

			display: flex;
			align-items: center;
			justify-content: center;

			.h_text {
				display: flex;
				justify-content: center;
				font-size: 6vh;
				width: 20%;
				color: $font-color;
			}
		}

		.h_penguin {
			padding: 100px 0;
		}

		.h_dog {}

		.carousel {
			height: 450px;
		}

		.footers {
			height: 280px;
			background-color: #f8f9fa;
		}

		/* 移动端样式 */
		@media (max-width: 768px) {
			.h_shiba {
				background-attachment: scroll;
			}

			.h_penguin {
				padding: 70px 0;
			}
		}
	}
}
</style>