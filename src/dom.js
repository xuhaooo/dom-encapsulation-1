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
        const array = []
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    },
    text(node, string){
        if(arguments.length === 2){
            if ('innerText' in node) {
                node.innerText = string
            }else{
                node.textContent == string
            }
        }else if(arguments.length === 1){
            if ('innerText' in node) {
                return node.innerText
            }else{
                return node.textContent
            }
        }
    },
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1){
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className){
            node.classList.add(className)
        },
        remove(node, className){
            node.classList.remove(className)
        },
        has(node, className){
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn){
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn){
        node.removeEventListener(eventName, fn)
    },
    // 上面一直都是用全局 id 访问元素，现在实现“查”，即给一个“选择器”返回一个元素
    find(selector){
        return document.querySelectorAll(selector)
    }
}