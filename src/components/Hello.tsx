import { default as React, Component, SyntheticEvent } from 'react'
import { TodoList } from '../store/TodoList'
import { observer } from 'mobx-react';

interface HelloProps {
    todos: TodoList
}

@observer
export default class Hello extends Component<HelloProps> {
    
    state = {
        title: ''
    }

    handleChange({ target: { value } }) {
        this.setState({
            title: value
        })
    }

    handlePushClick() {
        this.props.todos.push({
            title: this.state.title
        })
    }

    handlePopClick() {
        this.props.todos.pop()
    }

    render() {
        return (
            <div>
                {this.props.todos.todos.map(todo => (
                    <p>{todo.title}</p>
                ))}
                <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handlePushClick.bind(this)}>push</button>
                <button onClick={this.handlePopClick.bind(this)}>pop</button>
            </div>
        )
    }
}
