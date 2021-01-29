// STUB
const texts = [
  'JavaScript',
  'TypeScript',
  'CSS',
  'HTML',
  'React',
  'Python',
  'NodeJS',
  'Next',
  'Firebase',
  'PWA',
  'React Native',
  'SASS',
  'Express',
]

const tagCloud = TagCloud('.content', texts, {
  // radius in px
  radius: 180,

  // animation speed  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top  // 90 = left  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
})

// ANCHOR Responsive Radius Code
const width = window.innerWidth
console.log(` ${width} `)

window.addEventListener('resize', () => {
  window.location.reload()
})

// SECTION Functions
// switch style
function toDefault() {
  document.body.classList.remove('light')
}
function toLight() {
  document.body.classList.add('light')
}
// add / remove tag
function addTag() {
  if (!tc) return
  texts.push('New')
  tc.update(texts)
}
function removeTag() {
  if (!tc) return
  texts.pop()
  tc.update(texts)
}
var otherTcs = []
// create and destroy tagcloud
function toCreate() {
  if (otherTcs.length >= 3) return
  otherTcs.push(TagCloud('.content', texts))
}
function toDestroy() {
  var last = otherTcs[otherTcs.length - 1]
  if (!last) return
  last.destroy()
  otherTcs.pop()
}
// pause and resume tagcloud animation
function pause() {
  ;[].concat(tc, otherTcs).forEach(function (e) {
    return e.pause()
  })
}
function resume() {
  ;[].concat(tc, otherTcs).forEach(function (e) {
    return e.resume()
  })
}
// add and remove clickEvent
function clickEventHandler(e) {
  if (e.target.className === 'tagcloud--item') {
    window.open(`https://www.google.com/search?q=${e.target.innerText}`, '_blank')
  }
}
function addClickEvent() {
  var rootEl = document.querySelector('.content')
  rootEl.addEventListener('click', clickEventHandler)
}
function removeClickEvent() {
  var rootEl = document.querySelector('.content')
  rootEl.removeEventListener('click', clickEventHandler)
}

// !SECTION ------------------------------------------
