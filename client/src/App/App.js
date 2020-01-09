import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import FormsContextProvider from './store/FormsGlobalContext';

import Sandbox from '../Sandbox/Sandbox';
import AdminPanel from '../components/Admin/AdminPanel';
import StoreModule from '../components/Store/StoreModule';

import '../styles/index.scss';

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
	faAlignJustify,
	faBell,
	faCheck
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
	faAlignJustify,
	faBell,
	faCheck
);

class App extends Component {
	render () {
		return (
			<FormsContextProvider>
				<Router>
					<Switch>
						<Route path="/sandbox" component={Sandbox} />
						<Route path="/adminpanel" component={AdminPanel} />
						<Route path="/" component={StoreModule} />
					</Switch>
				</Router>
			</FormsContextProvider>
		);
	}
}

export { App };
