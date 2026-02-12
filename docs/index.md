---
title: Home
---

<script setup>
import { data as posts } from './.vitepress/posts.data.ts'

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
</script>

<div class="page-hero">
  <p class="hero-eyebrow">ZZH's Blog</p>
  <h1 class="hero-title">简约记录，深度思考</h1>
  <p class="hero-subtitle">代码、笔记与阅读的沉淀。</p>
</div>

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
.page-hero {
  max-width: 720px;
  margin: 0 auto;
  padding: 3.5rem 1rem 2rem;
}

.hero-eyebrow {
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 0.6rem;
  color: var(--vp-c-text-1);
}

.hero-subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-top: 0.8rem;
}

.posts-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.post-item {
  padding: 1.2rem 1.4rem;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.post-item:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-divider);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.post-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-title:hover {
  color: var(--vp-c-brand);
}

.post-date {
  font-size: 0.98rem;
  color: var(--vp-c-text-2);
  margin-left: 2rem;
  white-space: nowrap;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
  margin-bottom: 2rem;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--vp-c-divider-light);
  margin-bottom: 2rem;
}
</style>
