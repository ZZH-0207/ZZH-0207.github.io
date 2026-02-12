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
  <h1 class="hero-title">文章列表</h1>
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
  padding: 3.2rem 1rem 1.5rem;
}

.hero-eyebrow {
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-title {
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 0.6rem;
  color: var(--vp-c-text-1);
}

.posts-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem 3.5rem;
}

.post-item {
  padding: 1.1rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.post-item:hover {
  border-color: var(--vp-c-divider);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.post-title {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-title:hover {
  color: var(--vp-c-brand);
}

.post-date {
  font-size: 0.96rem;
  color: var(--vp-c-text-3);
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
