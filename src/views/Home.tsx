import { default as React, Component } from 'react'
import Hello from '../components/Hello'
import todoList from '../store/TodoList'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hello todos={todoList}/>
            </div>
        )
    }
}
