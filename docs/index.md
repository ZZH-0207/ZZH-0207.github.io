---
layout: home

hero:
  name: "ZZH's Blog"
  text: "Code, Note & Paper"
  tagline: "分享技术心得与生活点滴"
  actions:
    - theme: brand
      text: 浏览文章
      link: /categories
    - theme: alt
      text: 关于我
      link: /about

features:
  - title: 💻 Code
    details: 记录编程学习之路，分享技术解决方案。
  - title: 📝 Note
    details: 随手记录生活灵感与学习笔记。
  - title: 📄 Paper
    details: 论文阅读与学术研究心得。
---

<script setup>
import { data as posts } from './.vitepress/posts.data.ts'

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
</script>

<div class="posts-container">
  <div v-for="(post, index) in posts" :key="post ? post.url : index" class="post-item">
    <template v-if="post">
      <div class="post-header">
        <a :href="post?.url" class="post-title">{{ post?.title || post?.frontmatter?.title || 'Untitled' }}</a>
        <span class="post-date">{{ formatDate(post?.date || post?.frontmatter?.date) }}</span>
      </div>
    </template>
  </div>
</div>

<style>
.posts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.post-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-title {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-title:hover {
  color: var(--vp-c-brand);
}

.post-date {
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
  margin-left: 1rem;
}

/* Hero Title Gradient */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}

.VPHero .name {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
  background-image: var(--vp-home-hero-name-background);
}
</style>
