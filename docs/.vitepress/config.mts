import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZZH's Blog",
  description: "ZZH 的个人博客 - Python 开发工程师",
  themeConfig: {
    siteTitle: "ZZH's Blog",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/categories' },
      { text: '关于', link: '/about' }
    ],

    sidebar: false, // 禁用默认侧边栏，因为我们主要展示文章列表

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZZH-0207' }
    ]
  }
})
