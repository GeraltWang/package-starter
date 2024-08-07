import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Unknown UI',
  description: 'A Vue3 components library',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/unknown-ui/src/:component/(.*)': 'components/:component/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',
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
        { text: 'Icons 图标', link: '/components/icons/' },
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Input 输入框', link: '/components/input/' },
        { text: 'Tooltip 提示', link: '/components/tooltip/' },
        { text: 'Table 表格', link: '/components/table/' },
        { text: 'Virtual List 虚拟列表', link: '/components/virtual-list/' },
        { text: 'Notification 通知', link: '/components/notification/' },

      ],
      '/utils/': [{ text: 'gen-class', link: '/utils/gen-class' }],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
