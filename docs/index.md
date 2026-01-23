<script setup>
import { data as posts } from './posts.data.ts'

function formatDate(date) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<div class="posts-container">
  <h1>最新文章</h1>
  <div v-for="post in posts" :key="post.url" class="post-item">
    <div class="post-header">
      <a :href="post.url" class="post-title">{{ post.title }}</a>
      <span class="post-date">{{ formatDate(post.date) }}</span>
    </div>
    <div class="post-excerpt" v-if="post.excerpt" v-html="post.excerpt"></div>
    <div class="post-tags" v-if="post.tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>
  </div>
</div>

<style>
.posts-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.post-item {
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 2rem;
}

.post-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
}

.post-title:hover {
  color: var(--vp-c-brand-dark);
}

.post-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-excerpt {
  margin: 1rem 0;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.post-tags {
  margin-top: 1rem;
}

.tag {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  background-color: var(--vp-c-bg-soft);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
}
</style>
