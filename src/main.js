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

const fn = () => {
    log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test')[0]
log(testDiv)
const test2 = dom.find('#test2')[0]
const secondRed = dom.find('.red', test2)[0] // 找的范围
log(secondRed)

log(dom.parent(test))

const s2 = dom.find('#s2')[0]
log(dom.siblings(s2))
log(dom.next(s2))
log(dom.previous(s2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=>dom.style(n, 'color', 'red'))

log(dom.index(s2))