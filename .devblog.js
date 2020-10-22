const today = new Date().toISOString().substring(0, 10)

module.exports = {
  ignoredFiles: ['gulpfile.js', '._includes', 'scss', 'LICENSE', 'README.md'],
  collections: {
    subscribers: 53
  },
  nunjucksFilters: [{
    name: 'year',
    filter: () => new Date().getFullYear()
  }, {
    name: 'readingTime',
    filter: (content) => {
      const words = (content || '').split(' ').length
      const averageWPM = 250
      const readingTimeInMinutes  = words / averageWPM
      const minutes = parseInt(readingTimeInMinutes, 10)
      return minutes > 1 ? `${minutes} minutes` : `1 minute`
    }
  }, {
    name: 'withDomain',
    filter: (url) => (url && url.startsWith('/') || url === '') ? `https://decent.social${url}` : url
  }, {
    name: 'twitterText',
    filter: (post) => `${encodeURIComponent(`"${post.data.title}" ${post.attributes.tags.filter(t=> !['general', 'post', 'featured', 'draft'].includes(t)).filter((_, i) => i < 2).map(t => `#${t}`).join(' ')}`)}`
  }, {
    name: 'twitterTitle',
    filter: (title) => `"${encodeURIComponent(title || '')}"`
  }, {
    name: 'words',
    filter: (content) => (content || '').split(' ').length
  }, {
    name: 'json',
    filter: (content) => JSON.stringify(content || {})
  }, {
    name: 'isodate',
    filter: (date) => {
      try {
        return new Date(date).toISOString()
      } catch (err) {
        return date
      }
    }
  }, {
    name: 'today',
    filter: () => today
  }, {
    name: 'isoday',
    filter: (date) => {
      try {
        return new Date(date).toISOString().substring(0, 10)
      } catch (err) {
        return date
      }
    }
  }, {
    name: 'first5',
    filter: (items) => {
      return items.filter((_, i) => i < 5)
    }
  }, {
    name: 'next5',
    filter: (items) => {
      return items.filter((_, i) => i < 10 && i >= 5)
    }
  }]
}
