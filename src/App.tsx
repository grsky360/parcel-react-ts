import { default as React, Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Home from './views/Home'
import HelloW from './views/helloW'

export default class App extends Component {

    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/hellow'} component={HelloW} />
                </div>
            </HashRouter>
        )
    }
}
