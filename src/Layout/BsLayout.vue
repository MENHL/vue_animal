<template>
    <div id="home_layout">
        <a-layout>
            <!-- 头部 -->
            <a-layout-header class="header">
                <HeaderMenu />
            </a-layout-header>
            <!-- 内容 -->
            <a-layout-content class="content">
                <router-view />
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script setup>
import HeaderMenu from '@/views/HeaderMenu.vue';


</script>

<style lang="scss" scoped>
.header {
    background-color: $font-color;
    color: unset;
    padding: 0px 0.5vw;
}

.content {
    background-color: $font-color;
    height: calc(100vh - 64px);
}

/* 移动端样式 */
@media screen and (max-width: 768px) {}
</style>