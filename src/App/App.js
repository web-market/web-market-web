import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Sandbox from './devComponents/Sandbox';
import { List, ListItem } from './components/List';

import styles from './styles/index.scss';

class App extends Component {
	render () {
		return (
			<Router>
				<div className={styles.generalStyles}>
					<List>
						<ListItem
							component={<Link to="/">main page</Link>}
						/>
						<ListItem
							component={<Link to="/sandbox">Sandbox</Link>}
						/>
					</List>
					<Switch>
						<Route path="/sandbox" component={Sandbox} />
						<Route path="/" component={() => { return (<div>main page</div>); }} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
