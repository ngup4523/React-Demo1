import React from "react";
import TodoListItem from "./TodoListItem";
import './Styles.css'
import axios from "axios";

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            list_title: "",
            current_val: "",
            todos: [
            ]
        }
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    

    deleteTodo(index) {
        console.log('index , ',index)
        this.setState(prevState => (
            {
                todos: [...prevState.todos.slice(0,index), 
                    ...prevState.todos.slice(index+1)]
            }
        ))
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(data=>this.setState({todos: [{id: data.data.id, title: data.data.title, completed: data.data.completed}]}))
        .catch(error=>console.log(error))
    }
render() {
    return (
        <div className="todo-list">
            <h2>Todo List...</h2>
            <label>Title</label><br/>
            <input 
                placeholder="Enter title"
                type="text" 
                value={this.state.list_title}
                onChange={(event) => {
                    this.setState({list_title: event.target.value}) }}
            /><br/>
            {
                this.state.todos.map((item, index) => {
                    return <div>
                        {/* {item.title} and {item.completed.toString()} */}
                        <TodoListItem key = {index} title={item.title} completed={item.completed}
                        index = {index} deleteTodo = {this.deleteTodo} />
                    </div>
                })
            }
            

            {/* <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/> */}
            <input 
            placeholder="Enter item name" 
            type="text" 
            value={this.state.current_val}
            onChange={(event) => { this.setState({ current_val: event.target.value })}}
            />
            <button onClick={() => {
                this.setState(prevState => 
                    ({
                        todos: prevState.todos.concat(
                            {
                                title: this.state.current_val, completed: false
                            }),
                            current_val: ""
                    }))
            }}>Add Item to list</button>
        </div>
    )
}
}

export default TodoList