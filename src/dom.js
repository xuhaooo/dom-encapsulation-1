window.dom = {
    create(string) {
        const container = document.createElement('div')
        container.innerHTML = string
        return container.children[0]
    }
}