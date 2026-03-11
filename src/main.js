import './styles/base.css' // 引入全局样式

import Antd from 'ant-design-vue' // 引入全部组件
import 'ant-design-vue/dist/reset.css' // 引入样式
import * as Icons from '@ant-design/icons-vue'// 引入icon图标样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia() // 创建 pinia 实例

app.use(pinia)
app.use(router)
app.use(Antd) // 全局注册 Ant Design Vue 组件
app.mount('#app')

Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
