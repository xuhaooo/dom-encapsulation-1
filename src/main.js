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

dom.text(test, '你好这是新的内容')

dom.style(test, {border: '1px solid red', color: 'blue'})
log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
log(dom.class.has(test, 'blue'))