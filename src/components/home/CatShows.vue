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
    content: "中国狮子猫，被誉为中华田园猫中的贵族，是波斯猫与中华田园鲁西狸猫的混血结晶，拥有独特的外貌与深厚的历史底蕴。它属于食肉目猫科猫属哺乳动物，通体雪白，毛发蓬松浓密，颈部修长的毛发形似狮子鬃毛，姿态优雅。其眼睛明亮有神，多为蓝色或黄色，部分个体更是拥有独一无二的鸳鸯眼。狮子猫性格聪明独立，对新鲜事物充满好奇，同时对主人极为依恋，乐于互动且情感丰富。它们适应力强，但胆子相对较小，需避免过度刺激。作为长毛猫,需每日梳理毛发以防打结，并注意防暑降温。科学饲养下，其寿命通常可达12- 15年.是家庭中的理想伴侣。",
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
    margin: 40px 0 40px 0;
    display: flex;
    flex-wrap: nowrap;


    .cat,
    .cat_text {
        opacity: 0;
        width: 50%;
        height: 500px;
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
        position: relative;
        border-radius: 16px;
        box-shadow: 0 10px 20px #00000080, 0 -1px #ffffff80;
    }

    // 猫咪标题
    .cat_title {
        margin-top: 10px;
        text-align: center;
        font-size: 24px;
        border-radius: 16px;

        &.title-orange {
            background-color: $cat-background--color;
        }
    }

    // 猫咪段落介绍
    .cat_introduce {
        border-radius: 16px;
        // 首行缩进2格
        padding: 10px;
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
            padding: 2% 0;
        }

        .cat_introduce {
            font-size: 18px;
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
</style>