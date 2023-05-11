const Component = require('./component');

class TaskList extends Component{
    constructor(children) {
        super(children)
    }

    render() {
        return `
        <ul class="tasks">${this.renderInnerHTML}</ul>
        `
    }
}