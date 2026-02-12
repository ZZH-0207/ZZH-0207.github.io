import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZZH's Blog",
  description: "ZZH 的个人博客 - Python 开发工程师",
  head: [
    [
      'style',
      {},
      `
:root {
  --vp-font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --vp-c-brand-1: #3a6ea5;
  --vp-c-brand-2: #315f90;
  --vp-c-brand-3: #2a517a;
  --vp-c-brand-soft: rgba(58, 110, 165, 0.14);
  --vp-c-bg: #f7f8fa;
  --vp-c-bg-soft: #f0f3f7;
  --vp-c-bg-mute: #e7ebf2;
  --vp-c-divider: #dfe5ee;
  --vp-c-divider-light: #edf1f6;
  --vp-c-text-1: #1f2328;
  --vp-c-text-2: #4b5563;
  --vp-c-text-3: #6b7280;
  --vp-layout-max-width: 1120px;
  --vp-content-max-width: 760px;
}

:root.dark {
  --vp-c-brand-1: #7aa2ff;
  --vp-c-brand-2: #6a8ff0;
  --vp-c-brand-3: #5b7edc;
  --vp-c-brand-soft: rgba(122, 162, 255, 0.18);
  --vp-c-bg: #0f1115;
  --vp-c-bg-soft: #151820;
  --vp-c-bg-mute: #1b1f2a;
  --vp-c-divider: #242a36;
  --vp-c-divider-light: #1f2430;
  --vp-c-text-1: #e6e8ee;
  --vp-c-text-2: #b5bcc7;
  --vp-c-text-3: #8b95a7;
}

body {
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, rgba(247, 248, 250, 0.6) 100%);
}

:root.dark body {
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, rgba(15, 17, 21, 0.6) 100%);
}

.VPNav {
  background-color: rgba(247, 248, 250, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--vp-c-divider);
}

:root.dark .VPNav {
  background-color: rgba(15, 17, 21, 0.9);
}

.VPNavBarTitle .title {
  font-weight: 600;
  letter-spacing: 0.02em;
}

.VPNavBarMenuLink {
  color: var(--vp-c-text-2);
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-text-1);
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-text-1);
}

.VPDoc {
  line-height: 1.85;
  font-size: 16px;
}

.VPContent {
  padding-top: 24px;
}

.VPDoc h1,
.VPDoc h2,
.VPDoc h3,
.VPDoc h4 {
  letter-spacing: -0.01em;
}

.VPDoc a {
  text-decoration: none;
}

.VPDoc a:hover {
  color: var(--vp-c-brand-1);
}

.VPDoc pre,
.VPDoc code {
  border-radius: 10px;
}

.VPDoc pre {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider-light);
}

.VPDocOutline {
  border-left: 1px solid var(--vp-c-divider-light);
}

.VPDocOutlineItem .outline-link {
  color: var(--vp-c-text-2);
}

.VPDocOutlineItem .outline-link.active {
  color: var(--vp-c-brand-1);
}
      `
    ]
  ],
  themeConfig: {
    siteTitle: "ZZH's Blog",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/categories' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [], // 禁用默认侧边栏，因为我们主要展示文章列表

    outline: {
      level: [2, 4], // 显示 h2 到 h4 的标题
      label: '页面导航'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZZH-0207' }
    ]
  }
})
