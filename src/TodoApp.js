import React, { Component } from 'react';
import AddTodo from './AddTodo.js';
import request from 'superagent';

export default class TodoApp extends Component {
    state = { todos: [] }
    componentDidMount = async() => {
        const todos = await request.get('https://mysterious-reef-99737.herokuapp.com/api/todos')

        this.setState({ todos: todos.body})
    }

    handleClick = async () => {
        const newTodo = {
            id: Math.random(),
            task: this.state.todoInput,
            complete: false,
        };

        const newTodos = [...this.state.todos, newTodo];

        this.setState({ todos: newTodos });
        const data = await request.post('https://mysterious-reef-99737.herokuapp.com/api/todos', {
            task: this.state.todoInput
        });
    }

    handleInput = (e) => { this.setState({ todoInput: e.target.value })};

    render() {
        return (
            <div>
                <AddTodo
                todoInput={ this.state.todoInput }
                handleClick={ this.handleClick }
                handleInput={ this.handleInput }
                />
                    {
                        this.state.todos.map((todo) => <p
                        style={{
                            textDecoration: todo.complete ? 'line-through' : 'none'
                        }}
                        onClick={async () => {

                            const newTodos = this.state.todos.slice();

                            const matchingTodo = newTodos.find((thisTodo) => todo.id === thisTodo.id);

                            matchingTodo.complete = !todo.complete

                            this.setState({ todos: newTodos });

                            const data = await request.put(`https://mysterious-reef-99737.herokuapp.com/api/todos/${todo.id}`, matchingTodo);
                        }} key={todo.id}>
                            {todo.task}
                        </p>)
                    }
            </div>
        )
    }
}