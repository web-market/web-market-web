import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import FormsContextProvider from './store/FormsGlobalContext';
import AppContextProvider, { AppGlobalContext } from './store/AppGlobalContext';

import OverlayCloak from '../baseComponents/OverlayCloak';
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
	faCheck,
	faExclamationCircle,
	faPen,
	faTimes
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
	faCheck,
	faExclamationCircle,
	faPen,
	faTimes
);

class App extends Component {
	static contextType = AppGlobalContext;

	render () {
		const context = this.context;

		return (
			<FormsContextProvider>
				<Router>
					<Switch>
						<Route path="/sandbox" component={Sandbox} />
						<Route path="/adminpanel" component={AdminPanel} />
						<Route path="/" component={StoreModule} />
					</Switch>
				</Router>
				<OverlayCloak
					show={context.showOverlayCloak}
					handleClose={context.handleClose}
				/>
			</FormsContextProvider>
		);
	}
}

const AppWithGlobalContext = () => {
	return (
		<AppContextProvider>
			<App />
		</AppContextProvider>
	);
};

export { AppWithGlobalContext };
