const log = console.log.bind(console)
// document.createElement('div')
const div = dom.create('<div>newDiv</div>')
log(div)

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

const nodes = dom.empty(window.empty)
log(nodes)

dom.attr(test, 'title', 'Hi, I am Xu')
const title = dom.attr(test, 'title')
log(`title: ${title}`)
