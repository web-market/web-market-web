import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { FormContextProvider } from './baseComponents/Form/store/FormContext';

import Sandbox from './devComponent/Sandbox';

class App extends Component {
	render () {
		return (
			<FormContextProvider>
				<Router>
					<>
						<nav>
							<ul>
								<li>
									<Link to="/sandbox">Sandbox</Link>
								</li>
								<li>
									<Link to="/">main page</Link>
								</li>
							</ul>
						</nav>
						<Switch>
							<Route path="/sandbox">
								<Sandbox />
							</Route>
							<Route path="/">
								<div>main page</div>
							</Route>
						</Switch>
					</>
				</Router>
			</FormContextProvider>
		);
	}
}

export default App;
