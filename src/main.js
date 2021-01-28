const log = console.log.bind(console)
// document.createElement('div')
const div = dom.create('<div>newDiv</div>')
log(div)

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)