import Antd from 'ant-design-vue' // 引入全部组件
import 'ant-design-vue/dist/reset.css' // 引入样式
import './styles/base.css' // 引入全局样式
import * as Icons from '@ant-design/icons-vue'// 引入icon图标样式

// 懒加载插件
import VueLazyLoad from 'vue3-lazyload'

import errorImg from './assets/imgerror.png'


import { createApp } from 'vue'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
// 全局注册 Ant Design Vue 组件
app.use(Antd)

// 注册全局懒加载插件
app.use(VueLazyLoad, {
    preLoad: 1.0, // 提前加载高度（1倍视口高）
    error: errorImg,  // 加载失败占位图
    attempt: 1 // 加载失败后重试
})

app.mount('#app')

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
