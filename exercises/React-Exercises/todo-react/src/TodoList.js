import React, { Component } from 'react';
import axios from 'axios';
import Todo from "./Todo";

class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            inputs: {
                title: "",
                description: ""
            },
            todos: []
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://api.vschool.io/amy/todo");
        this.setState({
            todos: response.data
        })
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState(prevState =>({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post("https://api.vschool.io/amy/todo", this.state.inputs).then(res => {
            this.setState( prevState => ({
                todos: [...prevState.todos, res.data],
                inputs: {
                    title: '',
                    description: ''
                }
            }))
        })
    }
    
    handleDelete = id => {
        axios.delete(`https://api.vschool.io/amy/todo/${id}`).then(res => {
            this.setState(prevState => ({
                todos: prevState.todos.filter(todo => todo._id !== id)
            }))
        })
    }

    handleUpdate = (id, updatedTodo) => {
        axios.put(`https://api.vschool.io/amy/todo/${id}`, updatedTodo).then(res => {
            this.setState(prevState => ({
                todos: prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo)
            }))
        })
    }

    render() {
        const mappedTodos = this.state.todos.map(todo => <Todo key={todo._id + Math.random()} todo={todo} deleteTodo={this.handleDelete} update={this.handleUpdate}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="title" 
                    name="title" 
                    value={this.state.inputs.title} 
                    onChange={this.handleChange}/>
                    <input type="text" 
                    placeholder="description" 
                    name="description" 
                    value={this.state.inputs.description} 
                    onChange={this.handleChange}/>
                    <button type="submit">Add Todo</button>
                </form>
                <div>
                    {mappedTodos}
                </div>
            </div>
        );
    }
}

export default TodoList;