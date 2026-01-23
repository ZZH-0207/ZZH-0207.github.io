import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: true,
  render: true,
  excerpt: true,
  transform(rawData) {
    return rawData
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
      .map((page) => {
        return {
          title: page.frontmatter.title,
          url: page.url,
          date: page.frontmatter.date,
          tags: page.frontmatter.tags || [],
          category: page.frontmatter.category || 'Note',
          excerpt: page.excerpt
        }
      })
  }
})
