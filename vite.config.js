import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'


// https://vite.dev/config/
export default defineConfig({
  // 手机端访问时，允许外部设备访问开发服务器
  server: {
    host: '0.0.0.0',
    strictPort: true,
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          // 参数说明：
          importStyle: false, //在 main.js 引入了全量 reset.css，这里设为 false 避免重复引入样式
          resolveIcons: true, // 设置为 true，图标就会自动按需引入了！
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 这里使用 @use 语法，并确保路径正确
        additionalData: '@use "@/styles/global.scss" as *;',
      },
    },
  },

})
