import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { List, ListItem } from '../baseComponents/List';
import {
	DevDropdown,
	DevForm,
	DevGridLayout,
	DevCollapser,
	DevButton,
	DevModal
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
						<ListItem
							component={<Link to="/sandbox/collapser">Collapser</Link>}
						/>
						<ListItem
							component={<Link to="/sandbox/button">Button</Link>}
						/>
						<ListItem
							component={<Link to="/sandbox/modal">Modal</Link>}
						/>
					</List>
				</div>
				<Switch>
					<Route path="/sandbox/from" component={DevForm} />
					<Route path="/sandbox/dropdown" component={DevDropdown} />
					<Route path="/sandbox/gridlayout" component={DevGridLayout} />
					<Route path="/sandbox/collapser" component={DevCollapser} />
					<Route path="/sandbox/button" component={DevButton} />
					<Route path="/sandbox/modal" component={DevModal} />
				</Switch>
			</>
		);
	}
}

export default Sandbox;
