window.dom = {
    create(string) {
        const container = document.createElement('template')
        // template 标签可以容纳任意元素，专门用来容纳不显示，同时不能通过 children 来拿到
        // trim 一下，不然儿子一就是文本
        container.innerHTML = string.trim()
        return container.content.firstChild
    }
}