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
