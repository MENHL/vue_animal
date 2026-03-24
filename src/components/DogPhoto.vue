<template>
    <div id="dogPhoto" ref="containerRef" :style="{ height: containerOverallHeight + 'px' }">
        <div class="waterfall-item" v-for="dog in positionedDogs" :key="dog.id" :style="{
            width: colWidth + 'px',
            height: dog.displayHeight + 'px',
            transform: `translate(${dog.left}px, ${dog.top}px)`
        }">
            <img v-lazy="dog.src" :alt="dog.alt" class="dog-img" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { dogs } from "../family/familys";

const containerRef = ref(null);
const containerOverallHeight = ref(0); // 包含 padding 的总高度
const colWidth = ref(0);      // 宽度
const positionedDogs = ref([]);

// 响应式配置：移动端 2 列，平板 3 列，PC 端 4 列
const getColumnCount = () => {
    const width = window.innerWidth;
    if (width < 768) {
        return 2; // 手机
    } else if (width >= 768 && width < 1200) {
        return 3; // 平板或小屏笔记本
    } else {
        return 4; // 大屏 PC
    }
};
const calculateLayout = () => {
    if (!containerRef.value) return;

    // 1. 获取容器的实时 Padding 数值
    const style = window.getComputedStyle(containerRef.value);
    const paddingTop = parseFloat(style.paddingTop) || 0;
    const paddingLeft = parseFloat(style.paddingLeft) || 0;
    const paddingRight = parseFloat(style.paddingRight) || 0;
    const paddingBottom = parseFloat(style.paddingBottom) || 0;

    const columnCount = getColumnCount();
    const gap = 12; // 图片之间的间距

    // 2. 计算纯内容的可用宽度 (容器总宽 - 左内边距 - 右内边距)
    const totalContentWidth = containerRef.value.offsetWidth - paddingLeft - paddingRight;

    // 3. 计算单列宽度
    colWidth.value = (totalContentWidth - (columnCount - 1) * gap) / columnCount;

    // 4. 初始化每一列的高度累加器
    const columnHeights = new Array(columnCount).fill(0);

    positionedDogs.value = dogs.map((dog) => {
        // 算法：寻找当前最短的那一列
        const minHeight = Math.min(...columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);

        // 5. 计算坐标：加上 paddingLeft 和 paddingTop 使其避开边缘
        const left = columnIndex * (colWidth.value + gap) + paddingLeft;
        const top = minHeight + paddingTop;

        // 6. 根据原始比例计算显示高度
        const displayHeight = (dog.height / dog.width) * colWidth.value;

        // 更新该列高度累加
        columnHeights[columnIndex] += displayHeight + gap;

        return {
            ...dog,
            displayHeight,
            top,
            left,
        };
    });

    // 7. 计算容器最终总高度：最长列高度 + 底部 Padding
    // (注意：减去最后一个多出来的 gap)
    const maxColumnHeight = Math.max(...columnHeights);
    containerOverallHeight.value = maxColumnHeight + paddingTop + paddingBottom - gap;
};

// 窗口缩放处理
const handleResize = () => {
    calculateLayout();
};

onMounted(async () => {
    await nextTick();
    calculateLayout();
    window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
<<<<<<< HEAD

=======
#dogPhoto {
    position: relative;
    width: 100%;
    // 这里的 padding 现在会被 JS 正确识别并计算
    padding: 20px 15px;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: #fff; // 容器背景色
    transition: height 0.3s ease;

    .waterfall-item {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #f0f0f0; // 图片加载前的占位灰色
        border-radius: 10px;
        overflow: hidden;
        // 布局重排时的平滑位动画
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);

        .dog-img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;

            // vue3-lazyload 插件状态钩子
            &[lazy="loading"] {
                opacity: 0.7;
                filter: blur(2px);
            }

            &[lazy="loaded"] {
                opacity: 1;
                animation: fadeIn 0.6s ease-out;
            }

            &[lazy="error"] {
                background: #eee url('../assets/loading.gif') center no-repeat;
            }
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
>>>>>>> develop
</style>