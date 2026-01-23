import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: true,
  render: true,
  excerpt: true,
  transform(rawData) {
    return rawData
      .map((page) => {
        return {
          title: (page.frontmatter && page.frontmatter.title) || 'Untitled',
          url: page.url,
          date: (page.frontmatter && page.frontmatter.date) || null,
          excerpt: page.excerpt,
          frontmatter: page.frontmatter || {}
        }
      })
      .sort((a, b) => {
        const dateA = (a.frontmatter && a.frontmatter.date) ? new Date(a.frontmatter.date) : new Date(0)
        const dateB = (b.frontmatter && b.frontmatter.date) ? new Date(b.frontmatter.date) : new Date(0)
        return +dateB - +dateA
      })
  }
})
