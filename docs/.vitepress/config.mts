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
  --vp-font-family-base: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
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
}

:root.dark body {
  background: var(--vp-c-bg);
}

.VPNav {
  background-color: rgba(248, 247, 245, 0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--vp-c-divider-light);
}

:root.dark .VPNav {
  background-color: rgba(15, 17, 19, 0.9);
}

.VPNavBarTitle .title {
  font-weight: 600;
  letter-spacing: 0.02em;
}

.VPNavBarMenuLink {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-text-1);
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-text-1);
}

.VPContent.is-home {
  position: relative;
}

.VPContent.is-home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: min(1200px, 92vw);
  height: 280px;
  transform: translateX(-50%);
  background: radial-gradient(circle at 20% 20%, rgba(47, 111, 106, 0.14), transparent 60%),
    radial-gradient(circle at 80% 10%, rgba(35, 79, 76, 0.12), transparent 55%);
  filter: blur(18px);
  animation: homeGlow 18s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

.VPContent.is-home > .VPDoc {
  position: relative;
  z-index: 1;
}

@keyframes homeGlow {
  0% {
    opacity: 0.7;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(6px) scale(1.03);
  }
  100% {
    opacity: 0.7;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

.VPDoc {
  line-height: 1.8;
  font-size: 16px;
}

.VPContent {
  padding-top: 28px;
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
  border-radius: 12px;
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
