import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminPanel from '../components/AdminPanel/AdminPanel';
import Link from '../baseComponents/Link';

import '../styles/index.scss';

class App extends Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route path="/adminpanel" component={AdminPanel} />
					<Route path="/">
						<Link link="/adminpanel/statistic/" content="Admin panel" />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export { App };
