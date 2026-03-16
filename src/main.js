import './styles/base.css' // 引入全局样式
import Antd from 'ant-design-vue' // 引入全部组件
import 'ant-design-vue/dist/reset.css' // 引入样式
import * as Icons from '@ant-design/icons-vue'// 引入icon图标样式
// 添加animate动画
import 'animate.css';
// 懒加载插件
import VueLazyLoad from 'vue3-lazyload'

import { createApp } from 'vue'
// 引入pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 创建 pinia 实例
const pinia = createPinia()

app.use(pinia)
app.use(router)
// 全局注册 Ant Design Vue 组件
app.use(Antd)

// 注册全局懒加载插件
app.use(VueLazyLoad, {
    // loading 占位图

    // 加载失败占位图
    error: './assets/imgerroe.png',
    // 加载失败后重试
    attempt: 3
})

app.mount('#app')

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
