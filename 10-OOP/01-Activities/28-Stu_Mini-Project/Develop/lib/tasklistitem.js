const Component = require('./component')

class TaskListItem extends Component{
    constructor(children, priority = false) {
        super(children)
        this.priority = priority
    }

    render() {
        // let classNames = 'tasks-item'
        // if (this.priority) {
        //     classNames = 'tasks-item-priority'
        // }
        return `
        <li class='${this.priority ? 'tasks-item-priority' : 'tasks-item'}'>${this.renderInnerHtml}</li>
        `
    }
}