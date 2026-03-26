<template>
  <div class="penguins banner">
    <div class="penguin-title">
      <h1>“鹅”们的事儿</h1>
      <span class="title-en">OUR PENGUIN STORIES</span>
    </div>
    <div class="penguin-container">
      <!-- 左边卡片 -->
      <div class="penguin-swiper">
        <swiper-container ref="swiperRef" class="mySwiper" init="false">
          <swiper-slide v-for="item in penguins" :key="item.id">
            <img class="penguin_img" :src="item.src" :alt="item.alt" />
          </swiper-slide>
        </swiper-container>
      </div>
      <!-- 右边标题内容 -->
      <div class="p-content">
        <div class="p-name">
          <h2>{{ name }}</h2>
        </div>
        <div class="p-title">
          <p>{{ description }}</p>
        </div>
        <div class="p-footer">
          <a :href="targetUrl" target="_blank" class="more-btn">
            更多详情
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'
// 引入 VueUse
import { useEventListener } from '@vueuse/core'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { penguins } from '../../family/penguin.js'

register()

const swiperRef = ref(null)

// 初始化数据
const name = ref(penguins[0]?.name || '')
const description = ref(penguins[0]?.content || '')
const targetUrl = ref(penguins[0]?.href || '#')

onMounted(() => {
  const swiperEl = swiperRef.value
  if (!swiperEl) return

  Object.assign(swiperEl, {
    effect: 'cards',
    grabCursor: true,
    loop: true,
  })

  swiperEl.initialize()

  // 使用 VueUse 的 useEventListener 自动管理生命周期
  useEventListener(swiperEl, 'swiperslidechange', (event) => {
    const [swiper] = event.detail
    const index = swiper.realIndex

    // 更新数据
    name.value = penguins[index].name
    description.value = penguins[index].content
    targetUrl.value = penguins[index].href
  })
})
</script>

<style lang="scss" scoped>
.penguins {
  width: 100%;
  min-height: 80vh; //防止移动端内容溢出
  display: flex;
  flex-direction: column;

  // 1. 标题居中
  .penguin-title {
    width: 100%;
    height: 15vh; // 稍微增加一点高度，给副标题留空间
    display: flex;
    flex-direction: column; // 改为纵向布局
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 20px;

    h1 {
      font-size: 42px;
      font-weight: 800;
      letter-spacing: 4px; // 字间距
      // 渐变文字效果
      background: linear-gradient(135deg, #333 30%, skyblue 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      position: relative;
      z-index: 1;

      // 标题后的装饰小点
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: skyblue;
        border-radius: 50%;
        margin-left: 5px;
      }
    }

    .title-en {
      font-size: 14px;
      font-weight: 300;
      color: #aaa;
      letter-spacing: 8px;
      margin-top: 8px;
      text-indent: 8px; // 抵消末尾字间距，让居中更准
    }

    // 底部的艺术线条
    &::before {
      content: '';
      position: absolute;
      bottom: 20%;
      width: 100px;
      height: 1px;
      background: linear-gradient(to right, transparent, #ccc, transparent);
    }
  }

  // 核心布局容器
  .penguin-container {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 2%;

    //　swper卡片
    .penguin-swiper {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      swiper-container {
        width: 300px;
        height: 430px;
        overflow: visible;
      }

      // 针对每一个 slide 进行修饰
      swiper-slide {
        border-radius: 18px;
        overflow: hidden;
        background: transparent;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      }
    }

    // 卡片内容容器
    .p-content {
      width: 45%; // 稍微缩小一点，增加呼吸感
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 30px;
      background: rgba(255, 255, 255, 0.7); // 半透明背景
      backdrop-filter: blur(10px); // 毛玻璃效果
      border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      justify-content: space-between; // 让内容撑开

      .p-name {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start; // 改为左对齐更有设计感

        h2 {
          font-size: 32px;
          color: #333;
          position: relative;
          font-weight: 600;

          // 装饰线条
          &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 40px;
            height: 4px;
            background: skyblue;
            border-radius: 2px;
          }
        }
      }

      .p-title {
        width: 100%;
        flex: 1; // 占据中间剩余空间
        text-align: left; // 左对齐更易读
        font-size: 16px;
        line-height: 1.8;
        color: #666;
        overflow-y: auto; // 内容过多时可滚动

        p {
          margin: 0;
        }
      }

      .p-footer {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end; // 按钮放在右下角

        .more-btn {
          display: inline-flex;
          align-items: center;
          padding: 10px 24px;
          background-color: skyblue;
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(135, 206, 235, 0.4);
          cursor: pointer; //显示小手形状
          pointer-events: auto; // 确保可以触发点击事件

          .arrow {
            margin-left: 8px;
            transition: transform 0.3s ease;
          }

          &:hover {
            background-color: darken(skyblue, 10%);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(135, 206, 235, 0.6);

            .arrow {
              transform: translateX(5px);
            }
          }
        }
      }
    }
  }

  /* 移动端媒体查询 --- */
  @media (max-width: 768px) {
    .penguin-container {
      flex-direction: column;
      height: auto;
      padding: 20px 0;

      .penguin-swiper,
      .p-content {
        width: 100%; // 换行后宽度占满
        min-height: 300px;
      }

      .penguin-swiper {
        order: 1;

        swiper-container {
          width: 70vw; // 移动端稍微调大一点比例
          height: 350px;
        }
      }

      .p-content {
        width: 90%;
        margin: 20px auto;
        padding: 20px;
        min-height: auto; // 移动端自适应高度
        order: 2;

        .p-name h2 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
