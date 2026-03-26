<template>
    <div id="home_layout">
        <a-config-provider :theme="myTheme">
            <a-layout>
                <a-layout-header class="header">
                    <HeaderMenu />
                </a-layout-header>

                <a-layout-content class="content">
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-config-provider>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import HeaderMenu from '@/views/HeaderMenu.vue';

const myTheme = reactive({
    hashed: false,
    token: {
        colorPrimary: 'orange',
        borderRadius: 6,
    },
    components: {
        Menu: {
            // --- 状态 1：默认文字颜色 ---
            itemColor: 'rgba(0, 0, 0, 0.88)',

            // --- 状态 2：鼠标悬停 (Hover) ---
            itemHoverColor: 'orange',         // 鼠标经过，文字变橙色
            itemHoverBg: 'transparent',       // 鼠标经过，背景保持透明

            // --- 状态 3：点击选中 (Selected) ---
            itemSelectedBg: 'orange',         // 选中后，背景变为橙色
            itemSelectedColor: '#000000',     // 选中后，文字颜色强制为黑色

            // --- 状态 4：选中后鼠标再次经过 ---
            // 防止选中项在鼠标经过时文字又变回橙色，保持黑色
            itemSelectedHoverColor: '#000000',

            // --- 其他细节 ---
            itemActiveBg: 'orange',           // 点击那一瞬间的反馈色
            groupTitleColor: 'rgba(0, 0, 0, 0.45)',
        }
    }
})
</script>

<style lang="scss" scoped>
.header {
    // 确保这里的背景不会遮挡 Menu 的样式
    background-color: #ffffff;
    padding: 0px 0.5vw;
    line-height: 64px;
}

.content {
    min-height: calc(100vh - 64px);
}
</style>