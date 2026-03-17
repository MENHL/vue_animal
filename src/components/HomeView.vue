<template>
	<div id="homeView">
		<!-- 首页展示 -->
		<div class="h_introduce">
			<div class="h_shiba">
				<transition>
					<div class="h_text animate__animated animate__slideInUp">
						<h1>
							<span>{{ introduce.titleone }}</span>
							<br />
							<span>{{ introduce.titletwo }}</span>
						</h1>
					</div>
				</transition>
			</div>
			<!-- 猫咪 -->
			<div class="h_cat">
				<div class="catfilter">
					<CatShows />
				</div>

			</div>
			<div class="h_dog ">
				<DogIntroduce />
			</div>
			<div class="carousel">
				<Carousel />
			</div>
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
import CatShows from './home/CatShows.vue';

const introduce = {
	titleone: "Meet Your",
	titletwo: "Wild Neighbors",

}

</script>
<style lang="scss" scoped>
#homeView {
	.h_introduce {

		// 一级展示区
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

		// 二级展示区
		.h_cat {
			background-image: url(../assets/images/c_cat.jpg);
			// 	/* 确保图片覆盖容器，保持比例 */
			background-size: cover;
			/* 图片居中显示 */
			background-position: center center;
			background-repeat: no-repeat;

			//  添加模糊背景
			.catfilter {
				backdrop-filter: blur(15px);
				-webkit-backdrop-filter: blur(10px);
				/* Safari兼容 */

				display: flex;
				justify-content: center;
			}

		}

		// 四级展示区
		.carousel {
			height: 450px;
		}

		// 五级展示区
		.footers {
			height: 280px;
			background-color: $hom-background-color;
		}

		/* 移动端样式 */
		@media (max-width: 768px) {

			// 一级展示区
			.h_shiba {
				background-attachment: scroll;
			}
		}
	}
}
</style>