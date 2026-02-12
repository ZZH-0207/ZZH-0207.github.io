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
  <div class="hero-content">
    <p class="hero-eyebrow">Categories</p>
    <h1 class="hero-title">按主题浏览</h1>
  </div>
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
  max-width: 100%;
  margin: 0 auto;
  padding: 5rem 1rem 3rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);
  border-bottom: 1px solid var(--vp-c-divider-light);
  margin-bottom: 2rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.hero-eyebrow {
  font-size: 0.95rem;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeUp 0.8s ease-out forwards;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-top: 0;
  color: var(--vp-c-text-1);
  opacity: 0;
  animation: fadeUp 0.8s ease-out 0.2s forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.categories-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tab-button {
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider-light);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
}

.tab-button.active {
  color: white;
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(47, 111, 106, 0.2);
  transform: translateY(-1px);
}

.tab-button:hover:not(.active) {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.post-item {
  padding: 1.5rem;
  margin-bottom: 1.2rem;
  border: 1px solid transparent;
  border-radius: 16px;
  background: var(--vp-c-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.post-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--vp-c-brand-1);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-soft);
}

.post-item:hover::before {
  opacity: 1;
}

.post-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.post-title:hover {
  color: var(--vp-c-brand-1);
}

.post-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  margin-left: auto;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  background: var(--vp-c-bg-soft);
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}
</style>
