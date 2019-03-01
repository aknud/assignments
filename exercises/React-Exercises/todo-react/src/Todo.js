import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: true,
            title: props.todo.title,
            description: props.todo.description
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        let {title, description} = this.state;
        const updatedTodo = {title, description}
        this.props.update(id, updatedTodo)
    }

    render(){
        let {todo, deleteTodo} =this.props
        return (
            <div>
                {
                    this.state.edit ?
                    <>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button onClick={this.toggle}>Edit</button>
                        <button onClick={()=> deleteTodo(todo._id)}>Delete</button>
                    </>
                    :
                    <>
                        <form onSubmit={(e)=> this.handleSubmit(e, todo._id)}>
                            <input type="text" 
                                placeholder="title" 
                                name="title" 
                                value={this.state.title} 
                                onChange={this.handleChange}/>
                            <input type="text" 
                                placeholder="description" 
                                name="description" 
                                value={this.state.description} 
                                onChange={this.handleChange}/>
                            <button type="submit">Add Todo</button>
                        </form>
                    </>
                }
            </div>
        );
    }
};



export default Todo;