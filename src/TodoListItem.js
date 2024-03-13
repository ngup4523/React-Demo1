import React from "react";
class TodoListItem extends React.Component {
    render() {
        return <div>
            <input type='checkbox' checked={this.props.completed}/>
            <span>{this.props.title}</span>
            <button onClick={() => this.props.deleteTodo(this.props.index)}>Delete</button>
        </div>
    }
}
export default TodoListItem