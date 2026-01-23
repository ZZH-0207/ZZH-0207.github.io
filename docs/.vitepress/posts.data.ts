import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: true,
  render: true,
  excerpt: true,
  transform(rawData) {
    return rawData
      .map((page) => {
        // Parse filename from URL for metadata
        // Expected format: /posts/YYYY-M-D-Category-Title
        const filenameMatch = page.url.match(/\/(\d{4})-(\d{1,2})-(\d{1,2})-([^-]+)-(.+?)(?:\.html)?$/)
        
        let title = (page.frontmatter && page.frontmatter.title) || 'Untitled'
        let date = (page.frontmatter && page.frontmatter.date) ? new Date(page.frontmatter.date) : null
        let category = (page.frontmatter && page.frontmatter.category) || 'Note'

        if (filenameMatch) {
          const [_, year, month, day, cat, slug] = filenameMatch
          // Override if filename matches pattern
          title = slug
          date = new Date(`${year}-${month}-${day}`)
          category = cat
        }

        return {
          title,
          url: page.url,
          date,
          excerpt: page.excerpt,
          frontmatter: {
            ...page.frontmatter,
            title,
            date,
            category
          }
        }
      })
      .filter(page => page.title !== 'Untitled') // Filter out pages that didn't parse correctly if needed
      .sort((a, b) => {
        return +b.date - +a.date
      })
  }
})
