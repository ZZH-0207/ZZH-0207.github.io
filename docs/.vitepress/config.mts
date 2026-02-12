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
  --vp-font-family-base: "Inter", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --vp-c-brand-1: #2f6f6a;
  --vp-c-brand-2: #295f5b;
  --vp-c-brand-3: #234f4c;
  --vp-c-brand-soft: rgba(47, 111, 106, 0.12);
  --vp-c-bg: #f8f7f5;
  --vp-c-bg-soft: #f3f1ee;
  --vp-c-bg-mute: #ece8e3;
  --vp-c-divider: #e5e1db;
  --vp-c-divider-light: #efebe5;
  --vp-c-text-1: #1f2328;
  --vp-c-text-2: #4b5563;
  --vp-c-text-3: #707781;
  --vp-layout-max-width: 1120px;
  --vp-content-max-width: 760px;
}

:root.dark {
  --vp-c-brand-1: #8dc3be;
  --vp-c-brand-2: #7bb3ae;
  --vp-c-brand-3: #6aa39f;
  --vp-c-brand-soft: rgba(141, 195, 190, 0.2);
  --vp-c-bg: #0f1113;
  --vp-c-bg-soft: #15181b;
  --vp-c-bg-mute: #1b1f23;
  --vp-c-divider: #23282e;
  --vp-c-divider-light: #1f2328;
  --vp-c-text-1: #e6e8ee;
  --vp-c-text-2: #b9c0cb;
  --vp-c-text-3: #8e97a6;
}

body {
  background: var(--vp-c-bg);
  opacity: 0;
  animation: pageFadeIn 0.8s ease-out forwards;
}

@keyframes pageFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

:root.dark body {
  background: var(--vp-c-bg);
}

.VPNav {
  background-color: rgba(248, 247, 245, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(229, 225, 219, 0.6);
}

:root.dark .VPNav {
  background-color: rgba(15, 17, 19, 0.85);
  border-bottom: 1px solid rgba(35, 40, 46, 0.6);
}

.VPNavBarTitle .title {
  font-weight: 700;
  letter-spacing: -0.02em;
  font-size: 1.1rem;
}

.VPNavBarMenuLink {
  color: var(--vp-c-text-2);
  font-weight: 500;
  transition: color 0.2s ease;
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1);
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.VPDoc {
  line-height: 1.8;
  font-size: 17px;
}

.VPContent {
  padding-top: 0;
}

.VPDoc h1,
.VPDoc h2,
.VPDoc h3,
.VPDoc h4 {
  letter-spacing: -0.02em;
  font-weight: 700;
}

.VPDoc a {
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.VPDoc a:hover {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.VPDoc pre,
.VPDoc code {
  border-radius: 8px;
  font-family: "JetBrains Mono", "Fira Code", monospace;
}

.VPDoc pre {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider-light);
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.VPDocOutline {
  border-left: 1px solid var(--vp-c-divider-light);
}

.VPDocOutlineItem .outline-link {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.VPDocOutlineItem .outline-link:hover {
  color: var(--vp-c-text-1);
}

.VPDocOutlineItem .outline-link.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
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
