import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { DevDropdown, DevForm } from './components';

class Sandbox extends Component {
	render () {
		return (
			<>
				<nav>
					<ul>
						<li>
							<Link to="/sandbox/from">From</Link>
						</li>
						<li>
							<Link to="/sandbox/dropdown">Dropdown</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/sandbox/from" component={DevForm} />
					<Route path="/sandbox/dropdown" component={DevDropdown} />
				</Switch>
			</>
		);
	}
}

export default Sandbox;
