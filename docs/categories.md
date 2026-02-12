<script setup>
import { data as posts } from './.vitepress/posts.data.ts'
import { computed, ref } from 'vue'

const categories = ['Code', 'Note', 'Paper']
const activeCategory = ref('Code')

const filteredPosts = computed(() => {
  if (!posts || !Array.isArray(posts)) return []
  return posts.filter(post => {
    if (!post) return false
    const fm = post.frontmatter || {}
    const postCategory = fm.category || 'Note'
    return postCategory.toLowerCase() === activeCategory.value.toLowerCase()
  })
})

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}
</script>

<div class="page-hero">
  <p class="hero-eyebrow">Categories</p>
  <h1 class="hero-title">按主题浏览</h1>
  <p class="hero-subtitle">精选内容，清晰归类。</p>
</div>

<div class="categories-container">
  <div class="tabs">
    <button 
      v-for="cat in categories" 
      :key="cat"
      :class="{ active: activeCategory === cat }"
      @click="activeCategory = cat"
      class="tab-button"
    >
      {{ cat }}
    </button>
  </div>

  <div class="category-content">
  <div v-if="filteredPosts.length === 0" class="empty-state">
    暂无 {{ activeCategory }} 分类下的文章
  </div>
  <div v-else class="post-list">
    <div v-for="(post, index) in filteredPosts" :key="index" class="post-item">
      <div v-if="post" class="post-row">
          <a :href="post?.url" class="post-title">{{ post?.title || post?.frontmatter?.title || 'Untitled' }}</a>
          <span class="post-date">{{ formatDate(post?.date || post?.frontmatter?.date) }}</span>
      </div>
    </div>
  </div>
  </div>
</div>

<style>
.page-hero {
  max-width: 720px;
  margin: 0 auto;
  padding: 3.5rem 1rem 1.5rem;
}

.hero-eyebrow {
  font-size: 0.95rem;
  color: var(--vp-c-text-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 0.6rem;
  color: var(--vp-c-text-1);
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  margin-top: 0.8rem;
}

.categories-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1rem 4rem;
}

.tabs {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.tab-button.active {
  color: var(--vp-c-text-1);
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.tab-button:hover:not(.active) {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
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

.post-row {
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
  white-space: nowrap;
  margin-left: 2rem;
}

.empty-state {
  text-align: center;
  padding: 3.5rem;
  color: var(--vp-c-text-2);
}
</style>
