import { defineConfig } from 'vite'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'

// 注释vue插件是因为会和vitepress冲突
// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePluginVitepressDemo({
      glob: ['**/demos/.vue'],
    }),
  ],
})
