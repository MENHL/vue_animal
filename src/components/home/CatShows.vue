<template>
    <!-- 猫咪 -->
    <div class="cat_show  banner">
        <!-- 图片 -->
        <transition>
            <div class="cat animate-on-scroll" :class="catAnimated ? 'animate__animated animate__fadeInLeft' : ''">
                <img class="catimg" v-lazy="catimg.src" :alt="catimg.title">
            </div>
        </transition>
        <!-- 标题 -->
        <transition>
            <div class="cat_text animate-on-scroll"
                :class="catTextAnimated ? 'animate__animated animate__fadeInRight' : ''">
                <h2 class="cat_title title-orange">{{ catimg.title }}</h2>
                <p class="cat_introduce">{{ catimg.content }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


// 图片标题
const catimg = ref({
    src: new URL('../../assets/images/c_cat.jpg', import.meta.url).href,
    title: "狮子猫",
    content: "中国狮子猫被誉为中华田园猫中的“贵族”,是波斯猫与山东鲁西狸猫自然杂交的后代.它通体雪白,毛发浓密蓬松,颈部鬃毛形似雄狮,姿态优雅.眼睛多为蓝色、黄色,部分个体拥有独特的鸳鸯眼.性格聪明、好奇又亲人,情感丰富,乐于互动,但胆子较小,需避免惊吓。作为长毛猫,需每日梳理以防打结,并注意夏季防暑.在科学饲养下,寿命可达12–15年,是非常适合作为家庭伴侣的猫咪.",
})

// 1. 定义控制动画显示的响应式变量
const catAnimated = ref(false);
const catTextAnimated = ref(false);

// 2. 定义观察函数
const setupAnimationObserver = () => {
    // 回调函数：当元素进入视口时触发
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 根据元素的类名判断是哪个部分，并开启对应的动画
                if (entry.target.classList.contains('cat')) {
                    catAnimated.value = true;
                } else if (entry.target.classList.contains('cat_text')) {
                    catTextAnimated.value = true;
                }
                // 动画触发后，停止观察该元素（防止重复触发）
                observer.unobserve(entry.target);
            }
        });
    };

    // 3. 创建观察者实例
    const observer = new IntersectionObserver(callback, {
        rootMargin: '0px', // 可以调整，比如 '-50px' 让动画提前一点触发
        threshold: 0.1 // 当元素有 10% 出现在视口中时触发
    });

    // 4. 获取需要观察的元素并开始观察
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
};

// 5. 组件挂载后执行观察器
onMounted(() => {
    setupAnimationObserver();
});
</script>

<style lang="scss" scoped>
.cat_show {
    padding: 0 10px;
    margin: 50px 0;
    display: flex;
    flex-wrap: nowrap;


    .cat,
    .cat_text {
        opacity: 0;
        width: 50%;
        height: 600px;
        object-fit: cover;
        padding: 0 1%;
    }

    .cat {
        overflow: hidden;

        .catimg {
            width: 100%;
            height: 100%;
            border-radius: 26px;
            object-fit: cover;
            display: block;
        }
    }

    .cat_text {
        min-width: 0;
        display: flex;
        flex: 1;
        flex-direction: column;
        border-radius: 16px;
    }

    // 猫咪标题
    .cat_title {
        width: 20%;
        height: 15%;
        font-size: 20px;
        margin-top: 15%;
        border-radius: 16px;

        display: flex;
        justify-content: center;
        align-items: center;

        &.title-orange {
            background-color: $cat-background-color;
        }
    }

    // 猫咪段落介绍
    .cat_introduce {
        padding: 10px;
        text-indent: 2em;
        font-size: clamp(14px, 2.8vw, 18px);
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
            padding: 2% 0;
        }

        .cat_text {
            align-items: center;
            min-width: auto;
        }

        .cat_title {
            margin-top: 5%;
            width: 80%;
            height: 15%;
        }

        // 猫咪段落介绍
        .cat_introduce {

            text-indent: 2em;
            font-size: clamp(16px, 3.2vw, 18px);
            line-height: 1.6;
            overflow: hidden;
        }
    }
}

@media (max-width: 239px) {
    .cat_introduce {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-indent: 0;
        padding: 8px;
        font-size: clamp(12px, 3.5vw, 16px);
        max-height: 120px;
    }
}
</style>