window.dom = {
    create(string) {
        const container = document.createElement('template')
        // template 标签可以容纳任意元素，专门用来容纳不显示，同时不能通过 children 来拿到
        // trim 一下，不然儿子一就是文本
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node, node2){
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2){
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node){
        parent.appendChild(node)
    },
    wrap(node, parent){
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){
        const {childNodes} = node
        const array = []
        for(let i=0; i<childNodes.length; i++){
            dom.remove(childNodes[i])
            array.push(childNodes[i])
        }
        return array
    }
}