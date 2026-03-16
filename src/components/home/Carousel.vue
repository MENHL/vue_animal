<template>
    <swiper :modules="modules" :loop="true" :speed="800" :breakpoints="breakpoints" :space-between="50" :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    }">
        <swiper-slide v-for="photo in phtowall" :key="photo.id">
            <img class="carousel" :src="photo.src" :alt="photo.alt" />
        </swiper-slide>

    </swiper>
</template>

<script setup>
// 导入图片
const phtowall = [
    {
        id: 1,
        src: new URL('../../assets/images/d_jhelmuth.jpg', import.meta.url).href,
        alt: "d_jhelmuth",
    },
    {
        id: 2,
        src: new URL('../../assets/images/d_nipic.jpg', import.meta.url).href,
        alt: "d_nipic",
    },

    {
        id: 3,
        src: new URL('../../assets/images/y_yudkin.jpg', import.meta.url).href,
        alt: "y_yudkin",
    },

    {
        id: 4,
        src: new URL('../../assets/images/s_shushu.jpg', import.meta.url).href,
        alt: "s_shushu",
    },

    {
        id: 5,
        src: new URL('../../assets/images/x_daxiang.jpg', import.meta.url).href,
        alt: "yudkin",
    },

    {
        id: 6,
        src: new URL('../../assets/images/t_shvetsa.jpg', import.meta.url).href,
        alt: "t_shvetsa",
    },
]


// 1. 导入Swiper核心模块
import { Navigation, A11y, Autoplay } from 'swiper/modules';

// 2. 导入Swiper Vue组件,没调用
import { Swiper, SwiperSlide } from 'swiper/vue';

// 3. 导入Swiper样式（按需导入）
import 'swiper/css';
import 'swiper/css/navigation';

// 4. 定义modules数组
const modules = [Navigation, A11y, Autoplay];

// 不同屏幕下的显示
const breakpoints = {
    //手机： ≥300px显示一个，间隔0
    300: {
        slidesPerView: 1,
        spaceBetween: 10,

    },
    //平板：≥768px显示一个，间隔0
    768: {
        slidesPerView: 2,
        spaceBetween: 15,

    },
    //电脑：≥1024px显示一个，间隔20
    1024: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    2000: {
        slidesPerView: 4,
        spaceBetween: 30,
    },

};

</script>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: 100%;
    padding: 20px;

}

.swiper-slide {
    min-width: 200px;
    min-height: 300px;
    border-radius: 16px;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 10px 20px #00000080, 0 -1px #ffffff80;
    /* translateY(0)，触发硬件加速并修复渲染 */
    transform: translateZ(0);
    /* 针对Webkit内核的兼容前缀 */
    -webkit-transform: translateZ(0);

    .carousel {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>