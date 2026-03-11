import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig({
  // 手机端访问时，允许外部设备访问开发服务器
  server: {
    host: '0.0.0.0',
    strictPort: true,
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 注意：这里使用 @use 语法，并确保路径正确
        additionalData: '@use "@/styles/global.scss" as *;',
      },
    },
  },

})
