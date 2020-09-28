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
