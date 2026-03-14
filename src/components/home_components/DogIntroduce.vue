<template>
    <div class="dog_introduce banner">
        <h1 class="dog_title">animal & photograph</h1>
        <div class="dog_row">
            <a-image-preview-group>
                <a-image v-for="(imgs, index) in images" :key="index" :src="imgs.src" :alt="imgs.alt" :height="240"
                    class="gallery-item " />
            </a-image-preview-group>
        </div>
    </div>
</template>
<script setup>

// 定义图片数组
const images = [
    {
        src: new URL('../../assets/images/cat/cat1.jpg', import.meta.url).href,
        alt: 'Chausie',

    },
    {
        src: new URL('../../assets/images/dog/nisakorn.jpg', import.meta.url).href,
        alt: 'Dog Cat',

    },
    {
        src: new URL('../../assets/images/dog/pug.jpg', import.meta.url).href,
        alt: 'Pug',

    },
    {
        src: new URL('../../assets/images/penguin/pixabay.jpg', import.meta.url).href,
        alt: 'pixabay',

    },
    {
        src: new URL('../../assets/images/penguin/jvdm.jpg', import.meta.url).href,
        alt: 'jvdm',

    },

    {
        src: new URL('../../assets/images/cat/azatskaya.jpg', import.meta.url).href,
        alt: 'azatskaya',

    },
    {
        src: new URL('../../assets/images/cat/kumpicki.jpg', import.meta.url).href,
        alt: 'kumpicki',

    },
    {
        src: new URL('../../assets/images/cat/pixabay2.jpg', import.meta.url).href,
        alt: 'pixabay2',

    },
]
</script>

<style lang="scss" scoped>
.dog_introduce {
    padding-top: 2%;
    padding-bottom: 6%;

    .dog_title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 75px;
        text-transform: uppercase;
    }

    .dog_row {
        width: 1200px;
        height: 550px; // 容器高度（可选）
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
        .gallery-item {}

        .dog_row {
            justify-content: center;
            width: auto;
            height: auto;

        }

    }
}
</style>