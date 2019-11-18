import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import { RouteContextProviderWithRouter as RouteContext } from './store/RouteContext';

import Sandbox from '../Sandbox/Sandbox';
import AdminPanel from '../components/Admin/AdminPanel';
import StoreModule from '../components/Store/StoreModule';

import styles from '../styles/index.scss';
import {
	faChevronDown,
	faChevronLeft,
	faChevronRight,
	faChevronUp,
	faPlus,
	faChartBar,
	faTh,
	faFilter,
	faCogs,
	faCog,
	faAngleRight,
	faAlignJustify
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faChevronDown,
	faChevronLeft,
	faChevronRight,
	faChevronUp,
	faPlus,
	faChartBar,
	faTh,
	faFilter,
	faCog,
	faCogs,
	faAngleRight,
	faAlignJustify
);

class App extends Component {
	render () {
		return (
			<Router>
				<RouteContext>
					<div className={styles.generalStyles}>
						<Switch>
							<Route path="/sandbox" component={Sandbox} />
							<Route path="/adminpanel" component={AdminPanel} />
							<Route path="/" component={StoreModule} />
						</Switch>
					</div>
				</RouteContext>
			</Router>
		);
	}
}

export { App };
