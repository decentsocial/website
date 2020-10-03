const today = new Date().toISOString().substring(0, 10)

module.exports = {
  ignoredFiles: ['gulpfile.js', '._includes', 'scss', 'LICENSE', 'README.md'],
  collections: {
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
    filter: (url) => (url && url.startsWith('/')) ? `https://cri.dev${url}` : url
  }, {
    name: 'twitterText',
    filter: (post) => `${encodeURIComponent(`"${post.data.title}", by @christian_fei ${post.attributes.tags.filter(t=> !['general', 'post', 'featured', 'draft'].includes(t)).filter((_, i) => i < 2).map(t => `#${t}`).join(' ')}`)}`
  }, {
    name: 'twitterTitle',
    filter: (title) => `"${encodeURIComponent(title || '')}", by @christian_fei`
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
  }]
}