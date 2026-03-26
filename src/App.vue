<template>
  <div id="my_layout">
    <BsLayout />
  </div>
  <SpeedInsights />
</template>

<script setup>
import BsLayout from './Layout/BsLayout.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<style lang="scss" scoped>
#my_layout {
  background-color: var(--ph--background-color);
}
</style>
