<template>
    <div id="HeaderMove">
        <div class="header_drawer">
            <a-menu class="drawer_menu" :selectedKeys="current" mode="vertical" :items="items" @click="tomenu" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'


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
        // 如果不在菜单里（例如重定向或无效路径），可以默认高亮首页
        // current.value = ['/home'];
        // 或者保持为空
        current.value = []
    }
}
// 3. 组件挂载时：初始化菜单状态
onMounted(() => {
    updateCurrentKey()
})
// 4. 监听路由变化：当用户点击浏览器前进/后退按钮或编程式导航时，同步菜单高亮
watch(
    () => route.path,
    () => { updateCurrentKey() }
)
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
#HeaderMove {
    .header_drawer {
        .drawer_menu {
            border-right: none;
        }
    }
}
</style>