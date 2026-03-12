<template>
   <div id="globeTopMenu" class="banner">
      <a-row :wrap="false">
         <!-- logo和标题 -->
         <a-col :span="14">
            <div class="title_bar">
               <img class="logo" src="@/assets/logo.png" alt="logo" />
               <div class="title">宠物回忆录</div>
            </div>
         </a-col>
         <!-- 菜单栏 -->
         <a-col :span="10" class="header-col">
            <a-menu class="header-menu" :selectedKeys="current" mode="horizontal" :items="items" @click="tomenu" />
            <!-- 汉堡按钮 -->
            <div class="bars" type="primary" @click="showDrawer">
               <img class="header_bars" src="../assets//bars.png" alt="">
            </div>
         </a-col>
      </a-row>
      <!-- 移动显示 -->
      <div class="globe_move">
         <a-drawer class="drawer" :height="228" :placement="placement" :closable="false" :open="open" @close="onClose">
            <HeaderMove />
         </a-drawer>
      </div>
   </div>
</template>

<script setup>

import HeaderMove from '@/components/HeaderMove.vue';
import { h, ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const placement = ref('top');
const open = ref(false);
let resizeTimer = null; // 用于防抖


// 监听窗口大小变化
const handleResize = () => {
   // 使用防抖，避免频繁触发
   clearTimeout(resizeTimer);
   resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768) {
         // 如果屏幕宽度大于 768px (PC端)，强制关闭抽屉
         open.value = false;
      }
   }, 100);
};

const showDrawer = () => {
   open.value = true;

};
const onClose = () => {
   open.value = false;
};



const router = useRouter()
// 1. 引入 useRoute 用于获取当前路径
const route = useRoute()
const current = ref([])

// 2. 定义一个函数：根据当前路由设置菜单选中状态
const updateCurrentKey = () => {
   // 检查当前路径是否在生成的菜单项中
   const isActiveRouteInMenu = items.value.some((item) => item.key === route.path)

   if (isActiveRouteInMenu) {
      // 如果在菜单里，高亮当前路径
      current.value = [route.path]
   } else {
      // 如果不在菜单里（例如重定向或无效路径），可以默认高亮首页（可选）
      // current.value = ['/home'];
      // 或者保持为空
      current.value = []
   }
}

// 3. 组件挂载时：初始化菜单状态
onMounted(() => {
   // 初始化时也检查一次（防止页面直接在中间尺寸打开）
   updateCurrentKey();
   // 组件挂载时添加监听
   window.addEventListener('resize', handleResize);
   handleResize();
})

onUnmounted(() => {
   // 组件卸载时移除监听，防止内存泄漏
   window.removeEventListener('resize', handleResize);
   clearTimeout(resizeTimer);
});

// 4. 监听路由变化：当用户点击浏览器前进/后退按钮或编程式导航时，同步菜单高亮
watch(
   () => route.path,
   () => {
      open.value = false;        // 路由变化关闭抽屉
      updateCurrentKey();        // 更新菜单高亮
   }
);
// 菜单栏数据生成逻辑（保持不变）
const items = computed(() => {
   return router
      .getRoutes()
      .filter((route) => route.meta.showInMenu)
      .map((route) => {
         const { meta, path } = route
         return {
            key: path,
            label: meta.title,
            title: meta.title,
            // 在这里统一控制所有图标的大小
            icon: () =>
               h(meta.icon, {
                  style: { fontSize: '16px' },
               }),
         }
      })
})
// 菜单点击事件
const tomenu = ({ key }) => {
   router.push(key)
   // 注意：这里不需要手动改 current，因为 watch 监听了路由变化会自动改
}



</script>

<style lang="scss" scoped>
#globeTopMenu {

   // 标题logo区域
   .title_bar {
      display: flex;
      /* 垂直居中 */
      align-items: center;

      .logo {
         height: 50px;
      }

      .title {
         font-size: 16px;
         margin-left: 8px;
      }
   }

   // 菜单栏
   .header-col {
      display: flex;
      align-items: center;

      position: relative;
      padding-right: 60px;

      .header-menu {
         // 去除默认底部边框
         border-bottom: none;
         display: block;
         flex: 1;
      }

      // 汉堡组件
      .bars {
         display: none;
         position: absolute;
         right: 25px;

         .header_bars {
            width: 25px;
            height: 35px;
         }
      }
   }

   /* 移动端样式 */
   @media screen and (max-width: 768px) {

      // logo和标题区域调整
      .title_bar {
         margin-left: 20px;

         .logo {
            height: 40px;
         }

         .title {
            font-size: 14px;
         }
      }

      // 菜单栏调整：隐藏原菜单，显示汉堡组件
      .header-col {
         padding-right: 0;

         .header-menu {
            display: none; // 明确指定桌面端显示
         }

         .bars {
            display: block;
         }
      }
   }
}
</style>