import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZZH 的博客",
  description: "ZZH 的个人博客 - Python 开发工程师",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/2026-1-23-Note-personal-blog' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '个人博客搭建笔记', link: '/posts/2026-1-23-Note-personal-blog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZZH-0207' }
    ]
  }
})
