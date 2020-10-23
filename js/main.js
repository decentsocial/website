window.tracked = {}

// main()
document.addEventListener('DOMContentLoaded', main)

function main () {
  ;[...document.querySelectorAll('[class*="track-"]')].forEach(trackClick)
  Object.keys(window.localStorage).forEach(key => {
    if (/^track-/.test(key)) {
      window.plausible && window.plausible('clicked ' + key.replace('track-', ''))
      window.localStorage.removeItem(key)
    }
  })

  try { lazyLoad('[lazy]') } catch (err) { console.error(err.message, err) }

}
window.loadDemo = function (e) {
  e.preventDefault()
  console.log('submit form')
  const $demoTimeline = document.querySelector('.demo-timeline')
  const $username = document.querySelector('#username')
  const username = $username.value
  console.log(username)
  $demoTimeline.style.opacity = 0.3
  window.fetch(`https://app.decent.social/demo/timeline?username=${username}`)
    .then(res => res.json())
    .then(json => {
      window.plausible && window.plausible('used-demo')
      $demoTimeline.style.opacity = 1
      $demoTimeline.innerHTML = `
      <ul class="list-group list-group-flush ">
      ${json.map(t => `
      <a target="_blank" href="${t.link}" class="list-group-item list-group-item-action bg-white">
        <div class="d-flex w-100 py-3 justify-content-between">
          <div>
            <h5 class="mt-0">
              <div style="display: inline-block; border-radius: 50%; height: 2em; width: 2em; vertical-align: middle; background-size: 100%; background-image: url(${t.authorAvatar})"></div>
              &nbsp;&nbsp;&nbsp;&nbsp;${t.author}
            </h5>
          </div>
          <small class="text-muted">${new Date(t.date).toISOString().substring(0, 10)}</small>
        </div>
        <p class="mb-1 text-left py-2" style="overflow: hidden;">${t.text}</p>
      </a>              
      `).join('')}
      </ul>
      `
    })
  return false
}

// function trackEvent (name, once = true) {
//   if (window.plausible) {
//     if (once && !window.tracked[name]) {
//       window.tracked[name] = true
//       window.plausible(name)
//     }
//     if (!once) {
//       window.plausible(name)
//     }
//   }
// }

function trackClick ($el) {
  if ($el && $el.nodeName === 'A') {
    $el.addEventListener('click', function (e) {
      const trackClass = e.target.getAttribute('class').split(' ').find(c => /^track-.*/.test(c))
      if (trackClass) {
        if (e.target.getAttribute('href').startsWith('#')) {
          window.plausible && window.plausible('clicked ' + trackClass.replace('track-', ''))
        } else {
          window.localStorage.setItem(trackClass, 1)
        }
      }
    })
  }
}

function lazyLoad (selector = '[lazy]') {
  let $lazy = typeof selector === 'string' ? [...document.querySelectorAll(selector)] : [...selector]

  $lazy = $lazy.filter(toApplyLazyLoad)

  let lastCheck = Date.now()
  let scrolling = false
  const scrollIntervalHandle = setInterval(() => {
    if (scrolling && lastCheck > Date.now() - 1000) {
      $lazy = $lazy.filter(toApplyLazyLoad)
    } else {
      scrolling = false
    }
    if ($lazy.length === 0) {
      clearInterval(scrollIntervalHandle)
    }
  }, 100)
  document.addEventListener('scroll', registerScrolling, { capture: false, passive: true })
  document.addEventListener('wheel', registerScrolling, { capture: false, passive: true })
  document.addEventListener('touchmove', registerScrolling, { capture: false, passive: true })
  document.addEventListener('touchstart', registerScrolling, { capture: false, passive: true })
  document.addEventListener('touchend', registerScrolling, { capture: false, passive: true })
  const lazyContainers = document.querySelectorAll('.lazy-container')
  if (Array.isArray(lazyContainers) && lazyContainers.length > 0) {
    lazyContainers.addEventListener('scroll', registerScrolling, { capture: false, passive: true })
    lazyContainers.addEventListener('wheel', registerScrolling, { capture: false, passive: true })
    lazyContainers.addEventListener('touchmove', registerScrolling, { capture: false, passive: true })
    lazyContainers.addEventListener('touchstart', registerScrolling, { capture: false, passive: true })
    lazyContainers.addEventListener('touchend', registerScrolling, { capture: false, passive: true })
  }

  function registerScrolling () {
    lastCheck = Date.now()
    scrolling = true
  }

  function toApplyLazyLoad (el) {
    return el && !(isScrolledIntoView(el) && applyLazy(el))
  }

  function applyLazy (el) {
    if (!el) return
    const imageUrl = el.getAttribute('lazy')
    if (el instanceof window.HTMLImageElement) {
      el.setAttribute('src', imageUrl)
    } else {
      el.style.backgroundImage = `url(${imageUrl})`
    }
    return true
  }
}

function isScrolledIntoView (el) {
  if (!el) return
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - 100 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + rect.width
  )
}
