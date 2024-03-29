import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Unknown UI',
  description: 'A Vue3 components library',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/unknown-ui/src/:component/(.*)': 'components/:component/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
  },
  // srcDir: './docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/intro' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        { text: 'Button 按钮', link: '/components/button/' },
      ],
      '/utils/': [
        { text: 'gen-class', link: '/utils/gen-class' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
