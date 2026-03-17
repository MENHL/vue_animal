<template>
    <div class="dog_introduce banner">
        <h1 class="dog_title">{{ phto.title }}</h1>
        <div class="dog_row">
            <a-image-preview-group>
                <a-image v-for="(imgs, index) in phtoimg" :key="index" :src="imgs.src" :alt="imgs.alt" :height="240" />
            </a-image-preview-group>
        </div>
    </div>
</template>
<script setup>

// 定义图片数组
const phto = {
    title: "animal & photograph",
};
const phtoimg = [
    {
        src: new URL('../../assets/images/c_cat2.jpg', import.meta.url).href,
        alt: 'c_cat2',

    },
    {
        src: new URL('../../assets/images/d_nisakorn.jpg', import.meta.url).href,
        alt: 'c_nisakorn',

    },
    {
        src: new URL('../../assets/images/d_pug.jpg', import.meta.url).href,
        alt: 'd_pug',

    },
    {
        src: new URL('../../assets/images/p_pixabay.jpg', import.meta.url).href,
        alt: 'p_pixabay',

    },
    {
        src: new URL('../../assets/images/p_jvdm.jpg', import.meta.url).href,
        alt: 'p_jvdm',

    },

    {
        src: new URL('../../assets/images/c_azatskaya.jpg', import.meta.url).href,
        alt: 'azatskaya',

    },
    {
        src: new URL('../../assets/images/c_kumpicki.jpg', import.meta.url).href,
        alt: 'c_kumpicki',

    },
    {
        src: new URL('../../assets/images/c_pixabay2.jpg', import.meta.url).href,
        alt: 'c_pixabay2',
    },
]
</script>

<style lang="scss" scoped>
.dog_introduce {
    padding-top: 2%;
    padding-bottom: 6%;

    .dog_title {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: clamp(14px, 6vw, 28px);
        line-height: 1.2;
        min-height: 75px;
        text-transform: uppercase;
    }

    .dog_row {
        max-width: 1200px;
        max-height: 550px; // 容器高度（可选）
        margin: 0 auto;
        background-color: $font-color;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;
        padding: 16px;
        // 允许滚动
        overflow: auto;
    }

    @media (max-width: 768px) {
        .dog_title {}

        .dog_row {
            justify-content: center;
            width: auto;
            height: auto;
        }
    }
}
</style>