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
.categories-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}

.tabs {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.2rem;
  border-bottom: 1px solid var(--vp-c-divider-light);
  padding-bottom: 0.6rem;
}

.tab-button {
  padding: 0.4rem 0;
  border-radius: 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.tab-button.active {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.tab-button:hover:not(.active) {
  color: var(--vp-c-text-1);
}

.post-item {
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.post-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 0;
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
  font-size: 1rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  margin-left: 1rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-2);
}
</style>
