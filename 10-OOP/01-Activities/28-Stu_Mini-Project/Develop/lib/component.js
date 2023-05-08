class Component {
    constructor(children = []) {
        this.children = children
    }

    render() {
        throw new Error('Child class must implement a render() method.')
    }

    renderInnerHTML() {
        return this.children
            .map((child) => {
                if (typeof child === 'string') {
                    return child;
                }
                return child.render();
            })
            .join('');
    }
}

// const newCom = new Component(['1', '2', '3']).renderInnerHTML()
module.exports = Component;
