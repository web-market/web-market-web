import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { List, ListItem } from '../baseComponents/List';
import { DevDropdown, DevForm } from './components';

class Sandbox extends Component {
	render () {
		return (
			<>
				<List>
					<ListItem
						component={<Link to="/sandbox/from">From</Link>}
					/>
					<ListItem
						component={<Link to="/sandbox/dropdown">Dropdown</Link>}
					/>
				</List>
				<Switch>
					<Route path="/sandbox/from" component={DevForm} />
					<Route path="/sandbox/dropdown" component={DevDropdown} />
				</Switch>
			</>
		);
	}
}

export default Sandbox;
