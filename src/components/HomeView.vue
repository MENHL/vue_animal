<template>
	<div id="homeView">
		<!-- 首页展示 -->
		<div class="h_introduce">
			<div class="h_shiba">
				<transition>
					<div class="h_text animate__animated animate__slideInUp">
						<h1>
							<span>Meet Your</span>
							<br />
							<span>Wild Neighbors</span>
						</h1>
					</div>
				</transition>
			</div>
			<!-- 猫咪 -->
			<div class="h_cat  banner">
				<div class="cat_show">
					<!-- 图片 -->
					<div class="cat">
						<img class="catimg" :src="catimg.src" :alt="catimg.alt">
					</div>
					<!-- 标题 -->
					<div class="cat_text">
						<h2 class="cat_title title-orange">狮子猫</h2>
						<p class="cat_introduce">
							中国狮子猫，被誉为中华田园猫中的贵族，是波斯猫与中华田园鲁西狸猫的混血结晶，拥有独特的外貌与深厚的历史底蕴。它属于食肉目猫科猫属哺乳动物，通体雪白，毛发蓬松浓密，颈部修长的毛发形似狮子鬃毛，姿态优雅。其眼睛明亮有神，多为蓝色或黄色，部分个体更是拥有独一无二的鸳鸯眼。

							狮子猫性格聪明独立，对新鲜事物充满好奇，同时对主人极为依恋，乐于互动且情感丰富。它们适应力强，但胆子相对较小，需避免过度刺激。作为长毛猫，需每日梳理毛发以防打结，并注意防暑降温。科学饲养下，其寿命通常可达12-15年，是家庭中的理想伴侣。
						</p>
					</div>
				</div>
			</div>
			<div class="h_dog ">
				<DogIntroduce />
			</div>
			<div class="carousel">
				<Carousel />
			</div>
			<div class="footers">
			</div>
		</div>
	</div>
</template>
<script setup>
import Carousel from './home/Carousel.vue';
import DogIntroduce from './home/DogIntroduce.vue';
import { ref } from 'vue';

const catimg = ref({
	src: new URL('../assets/images/c_cat.jpg', import.meta.url).href,
	alt: "狮子猫"
})
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
			.cat_show {
				margin: 40px 0 40px 0;
				display: flex;
				flex-wrap: nowrap;

				.cat,
				.cat_text {
					width: 50%;
					height: 500px;
					object-fit: cover;
				}

				.cat {
					overflow: hidden;

					.catimg {
						width: 100%;
						height: 100%;
						object-fit: cover;
						display: block;
					}
				}

				.cat_text {
					// 背景颜色仅用于演示，上线时请移除
					background-color: $hom-background-color;
					position: relative;
					padding: 20px;
					box-sizing: border-box;
				}

				// 猫咪标题
				.cat_title {
					// margin-top: 10px;
					text-align: center;
					font-size: 20px;
					// margin-bottom: 10px;

					&.title-orange {
						background-color: var(--gl-color, orange);
					}
				}

				// 猫咪段落介绍
				.cat_introduce {
					// 首行缩进2格
					text-indent: 2em;
					font-size: clamp(16px, 2vw, 22px);
					line-height: 1.8;
					overflow: hidden;
				}
			}

			/* 移动端样式 */
			@media (max-width: 768px) {
				.cat_show {
					flex-wrap: wrap;

					.cat,
					.cat_text {
						width: 100%;
						max-height: 380px;
					}

					.cat_introduce {
						font-size: 16px;
					}

					// 猫咪段落介绍
					.cat_introduce {
						text-indent: 2em;
						font-size: clamp(16px, 1.5vw, 25px);
						line-height: 1.6;
						overflow: hidden;
					}
				}
			}
		}

		// 三级展示区
		.h_dog {
			background-color: var(--gl-color);
		}

		// 四级展示区
		.carousel {
			height: 450px;
		}

		// 五级展示区
		.footers {
			height: 400px;
			background-color: olivedrab;
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