import { default as React, Component } from 'react'
import Hello from '../components/Hello'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Hello msg={'hello'} />
            </div>
        )
    }
}
