import { default as React, Component } from 'react'

interface HelloStates {
    level: number
}

export default class Hello extends Component<any, HelloStates> {
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
                <h1>{ this.state.level }</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
