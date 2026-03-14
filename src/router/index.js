import { createRouter, createWebHistory } from 'vue-router'
// 图标可以在路由层引入，也可以在菜单层引入。这里为了数据完整，先引入。
import { CrownOutlined, PictureOutlined, SmileOutlined } from '@ant-design/icons-vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      // 默认重定向
      component: () => import('@/components/HomeView.vue'),
      meta: {
        title: '首页',
        icon: CrownOutlined,
        showInMenu: true, // 标记是否显示在菜单
      }
    },
    {
      path: '/journalism',
      name: 'journalism',
      component: () => import('@/components/Dog_photo.vue'),
      meta: {
        title: 'Dog',
        icon: PictureOutlined,
        showInMenu: true,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/Cat_photo.vue'),
      meta: {
        title: 'Kitty',
        icon: PictureOutlined,
        showInMenu: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/AboutView.vue'),
      meta: {
        title: '关于我们',
        icon: SmileOutlined,
        showInMenu: true,
      }
    },

  ],
})

export default router