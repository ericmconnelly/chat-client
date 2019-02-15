import React, {Component} from 'react'
import { Router, Route, Switch, Redirect  } from 'react-router-dom'
import Login from './Login'
import Chat from './Chat'
import history from "../history"

class App extends Component {

	render() {
		return(
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/chat" component={Chat} />
					<Redirect to="/" />
				</Switch>
			</Router>
		);
	}
}

export default App;