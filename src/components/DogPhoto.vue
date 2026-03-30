<template>
    <div id="dogPhoto" ref="containerRef" :style="{ height: containerOverallHeight + 'px' }">
        <div class="waterfall-item" v-for="dog in positionedDogs" :key="dog.id" :style="{
            width: colWidth + 'px',
            height: dog.displayHeight + 'px',
            transform: `translate(${dog.left}px, ${dog.top}px)`
        }">
            <img v-lazy="dog.src" :alt="dog.alt" class="dog-img" />
        </div>
        <div class="load-more-container" v-if="!isAllLoaded || isLoading">
            <div class="loading-wrapper">
                <div class="loading-dot"></div>
                <span>正在探索更多毛孩子...</span>
            </div>
        </div>
        <div class="load-more-container finished" v-else-if="isAllLoaded && !isLoading">
            <span>所有的毛孩子都在这里啦 🐾</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch, computed } from "vue";
import { dogs } from "../family/familys";
import { useWindowScroll } from '@vueuse/core';

// 状态管理
const containerRef = ref(null);
const containerOverallHeight = ref(0);
const colWidth = ref(0);
const positionedDogs = ref([]);

const pageSize = 8;
const displayLimit = ref(pageSize);
const isLoading = ref(false);
const isAllLoaded = computed(() => displayLimit.value >= dogs.length);

const { y } = useWindowScroll();

// --- 1. 核心修改：图片预加载逻辑 ---
const preloadImages = (imageUrls) => {
    const promises = imageUrls.map(url => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            // 无论成功还是失败都 resolve，防止某张图坏了导致整个页面卡住
            img.onload = () => resolve();
            img.onerror = () => resolve();
        });
    });
    return Promise.all(promises);
};

// 2. 布局算法优化
const calculateLayout = () => {
    if (!containerRef.value) return;

    // 1. 获取容器宽度 (clientWidth 不含滚动条，最准确)
    const containerWidth = containerRef.value.clientWidth;
    const style = window.getComputedStyle(containerRef.value);

    // 获取左右 padding
    const pLeft = parseFloat(style.paddingLeft) || 0;
    const pRight = parseFloat(style.paddingRight) || 0;
    const pTop = parseFloat(style.paddingTop) || 0;
    const pBottom = parseFloat(style.paddingBottom) || 0;

    const columnCount = getColumnCount();
    const gap = 12;

    // 2. 计算单列宽度：基于容器内部纯宽度
    const availableWidth = containerWidth - pLeft - pRight;
    colWidth.value = (availableWidth - (columnCount - 1) * gap) / columnCount;

    // 3. 【核心修复】计算图片阵列实际占用的总宽度
    // 防止因为像素取整导致的几像素偏差
    const actualContentWidth = (columnCount * colWidth.value) + ((columnCount - 1) * gap);

    // 4. 【核心修复】计算动态起始偏移量
    // 这将确保无论 padding 是多少，图片群都会在容器里绝对居中
    const startLeft = (containerWidth - actualContentWidth) / 2;

    const columnHeights = new Array(columnCount).fill(0);

    positionedDogs.value = dogs.slice(0, displayLimit.value).map((dog) => {
        const minHeight = Math.min(...columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);

        // 使用计算出的 startLeft 作为起始点
        const left = startLeft + columnIndex * (colWidth.value + gap);
        const top = minHeight + pTop;

        const displayHeight = (dog.height / dog.width) * colWidth.value;
        columnHeights[columnIndex] += displayHeight + gap;

        return { ...dog, displayHeight, top, left };
    });

    const maxColumnHeight = Math.max(...columnHeights);
    containerOverallHeight.value = maxColumnHeight + pTop + pBottom + 80;
};

// 3. 触底加载流程控制 
const loadMore = async () => {
    if (isLoading.value || isAllLoaded.value) return;

    isLoading.value = true;

    //  获取下一批图片的 URL 列表
    const nextStart = displayLimit.value;
    const nextEnd = Math.min(nextStart + pageSize, dogs.length);
    const nextBatch = dogs.slice(nextStart, nextEnd).map(d => d.src);

    // 静默等待图片下载完成
    await Promise.all([
        preloadImages(nextBatch),
        new Promise(r => setTimeout(r, 400))
    ]);

    // 只有下载完了，才更新 limit 触发 Vue 渲染 DOM
    displayLimit.value = nextEnd;
    calculateLayout();

    await nextTick();
    isLoading.value = false;
};

// --- 其他基础逻辑 ---
const getColumnCount = () => {
    const width = window.innerWidth;
    if (width < 768) return 2;
    if (width < 1200) return 3;
    return 4;
};

watch(y, (newY) => {
    if (isAllLoaded.value || isLoading.value) return;
    const threshold = 400;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    if (newY + windowHeight >= fullHeight - threshold) {
        loadMore();
    }
});

const handleResize = () => calculateLayout();

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
#dogPhoto {
    position: relative;
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
    padding: 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    min-height: 100vh;
    overflow-x: hidden;
}

.waterfall-item {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #f7f7f7;
    border-radius: 12px;
    overflow: hidden;
    /* transform 的过渡动画保持 */
    transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

    .dog-img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        opacity: 0;

        &[lazy="loaded"] {
            opacity: 1;
            /* 由于图片已预加载，这个动画会非常顺滑地立即执行 */
            animation: smoothFadeIn 0.8s ease forwards;
        }
    }
}

.load-more-container {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    color: #a0a0a0;
    font-size: 14px;

    .loading-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;

        .loading-dot {
            width: 8px;
            height: 8px;
            background-color: #1890ff;
            border-radius: 50%;
            animation: pulse 1.2s infinite ease-in-out;
        }
    }
}

@keyframes smoothFadeIn {
    from {
        opacity: 0;
        filter: blur(5px);
        transform: scale(0.98);
    }

    to {
        opacity: 1;
        filter: blur(0);
        transform: scale(1);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(0.8);
        opacity: 0.5;
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }
}
</style>