import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 注释vue插件是因为会和vitepress冲突
// import vue from '@vitejs/plugin-vue'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^unknown-ui/,
        replacement: path.resolve(baseUrl, 'packages/unknown-ui/src'),
      },
      {
        find: /^@unknown-ui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
