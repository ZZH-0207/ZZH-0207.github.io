---
title: Home
layout: home
---

<script setup>
import { data as posts } from './.vitepress/posts.data.ts'
import { onMounted, ref } from 'vue'

const canvasRef = ref(null)

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight
  
  // 粒子配置
  const particles = []
  const count = 180 // 大幅增加粒子数量
  const connectionDistance = 180
  
  class Particle {
    constructor() {
      this.reset()
    }
    
    reset() {
      this.x = Math.random() * width
      this.y = Math.random() * height
      this.vx = (Math.random() - 0.5) * 0.6
      this.vy = (Math.random() - 0.5) * 0.6
      this.radius = Math.random() * 1.5 + 0.5
      this.alpha = Math.random() * 0.3 + 0.05
    }
    
    update() {
      this.x += this.vx
      this.y += this.vy
      
      if (this.x < 0 || this.x > width) this.vx *= -1
      if (this.y < 0 || this.y > height) this.vy *= -1
    }
    
    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(47, 111, 106, ${this.alpha})`
      ctx.fill()
    }
  }
  
  for (let i = 0; i < count; i++) {
    particles.push(new Particle())
  }
  
  function animate() {
    ctx.clearRect(0, 0, width, height)
    
    particles.forEach((p, i) => {
      p.update()
      p.draw()
      
      // 连线
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const dx = p.x - p2.x
        const dy = p.y - p2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < connectionDistance) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(47, 111, 106, ${0.06 * (1 - dist / connectionDistance)})`
          ctx.stroke()
        }
      }
    })
    
    requestAnimationFrame(animate)
  }
  
  animate()
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  })
})
</script>

<canvas ref="canvasRef" class="global-canvas"></canvas>

<div class="page-hero">
  <div class="hero-content">
    <p class="hero-eyebrow">ZZH's Blog</p>
    <h1 class="hero-title">文章列表</h1>
  </div>
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
.global-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
}

.page-hero {
  max-width: 100%;
  margin: 0 auto;
  padding: 6vh 1rem 4vh;
  position: relative;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid var(--vp-c-divider-light);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25vh;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.hero-eyebrow {
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.3rem;
  opacity: 0;
  animation: fadeUp 0.8s ease-out forwards;
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-top: 0;
  background: linear-gradient(135deg, var(--vp-c-text-1) 30%, var(--vp-c-brand-1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

.posts-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  position: relative;
  z-index: 1;
}

.post-item {
  padding: 1.5rem;
  margin-bottom: 1.2rem;
  border: 1px solid transparent;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

:root.dark .post-item {
  background: rgba(30, 30, 32, 0.6);
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

.post-header {
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
