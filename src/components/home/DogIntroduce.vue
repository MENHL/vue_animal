<template>
    <div class="dog_introduce banner">
        <div class="dog_title_wrapper">
            <h1 class="dog_title">{{ phto.title }}</h1>
            <div class="title_decoration">
                <span class="line"></span>
                <span class="dot"></span>
                <span class="line"></span>
            </div>
        </div>
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
    padding: 100px 0;
    padding-bottom: 6%;
    border-radius: 15px;

<<<<<<< HEAD
    .dog_title {
=======
    .dog_title_wrapper {
>>>>>>> develop
        display: flex;
        align-items: center;
<<<<<<< HEAD
        justify-content: center;

        font-size: clamp(14px, 6vw, 28px);
        line-height: 1.2;
        min-height: 75px;
        text-transform: uppercase;
=======
        margin-bottom: 50px; // 与下方图片的间距

        .dog_title {
            font-size: 48px;
            font-weight: 800;
            color: #2c3e50;
            text-transform: uppercase;
            letter-spacing: 6px; // 关键：拉大字间距更有画廊感
            margin: 0;
            line-height: 1.2;
            text-align: center;

            // 渐变色文字（可选，很有质感）
            background: linear-gradient(to bottom, #2c3e50, #bdc3c7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            // 移动端适配
            @media (max-width: 768px) {
                font-size: 28px;
                letter-spacing: 3px;
            }
        }

        .title_decoration {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 10px;

            .line {
                width: 40px;
                height: 2px;
                background-color: #3498db; 
                border-radius: 2px;
            }

            .dot {
                width: 6px;
                height: 6px;
                background-color: #3498db;
                transform: rotate(45deg); // 菱形小点
            }
        }
>>>>>>> develop
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