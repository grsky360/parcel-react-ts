import { default as React, Component } from 'react'

interface HelloProps {
    msg?: string
}

interface HelloStates {
    level: number
}

export default class Hello extends Component<HelloProps, HelloStates> {
    state = {
        level: 0
    }

    decrement = () => {
        this.setState((oldState) => {
            return {
                level: oldState.level - 1
            }
        })
    }

    increment = () => {
        this.setState((oldState) => {
            return {
                level: oldState.level + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.props.msg || this.props.children }</h1>
                <h2>{ this.state.level }</h2>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
