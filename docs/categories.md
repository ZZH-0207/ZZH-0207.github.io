<script setup>
import { data as posts } from './.vitepress/posts.data.ts'
import { computed, ref } from 'vue'

const categories = ['Code', 'Note', 'Paper']
const activeCategory = ref('Code')

const filteredPosts = computed(() => {
  return posts.filter(post => {
    const postCategory = post.category || 'Note'
    return postCategory.toLowerCase() === activeCategory.value.toLowerCase()
  })
})

function formatDate(date) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
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
    
    <div v-else v-for="post in filteredPosts" :key="post.url" class="post-item">
      <a :href="post.url" class="post-title">{{ post.title }}</a>
      <span class="post-date">{{ formatDate(post.date) }}</span>
    </div>
  </div>
</div>

<style>
.categories-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1rem;
}

.tab-button {
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.tab-button.active {
  background: var(--vp-c-brand);
  color: white;
}

.tab-button:hover:not(.active) {
  background: var(--vp-c-bg-mute);
}

.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.post-title {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-title:hover {
  color: var(--vp-c-brand);
}

.post-date {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--vp-c-text-2);
}
</style>
