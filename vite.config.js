import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // 設置 Vite 的端口为 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 添加别名配置，将 @ 设置为 ./src 路径
    },
  },
})
