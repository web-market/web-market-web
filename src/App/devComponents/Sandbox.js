import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { List, ListItem } from '../baseComponents/List';
import {
	DevDropdown,
	DevForm,
	DevGridLayout
} from './components';

class Sandbox extends Component {
	render () {
		return (
			<>
				<div style={{ marginBottom: 25 }}>
					<List>
						<ListItem
							component={<Link to="/sandbox/from">From</Link>}
						/>
						<ListItem
							component={<Link to="/sandbox/dropdown">Dropdown</Link>}
						/>
						<ListItem
							component={<Link to="/sandbox/gridlayout">GridLayout</Link>}
						/>
					</List>
				</div>
				<Switch>
					<Route path="/sandbox/from" component={DevForm} />
					<Route path="/sandbox/dropdown" component={DevDropdown} />
					<Route path="/sandbox/gridlayout" component={DevGridLayout} />
				</Switch>
			</>
		);
	}
}

export default Sandbox;
