import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormsContextProvider from './store/FormsGlobalContext';
import AppContextProvider, { AppGlobalContext } from './store/AppGlobalContext';

import OverlayCloak from '../baseComponents/OverlayCloak';
import Notification from '../baseComponents/Notification';
import AdminPanel from '../modules/AdminPanel';

import Link from '../baseComponents/Link';

import '../styles/index.scss';

class App extends Component {
	static contextType = AppGlobalContext;

	render () {
		const { showOverlayCloak, handleOverlayClose } = this.context;

		return (
			<FormsContextProvider>
				<Router>
					<Switch>
						<Route path="/adminpanel" component={AdminPanel} />
						<Route path="/">
							<Link link="/adminpanel/statistic/" content="Admin panel" />
						</Route>
					</Switch>
				</Router>
				<OverlayCloak
					show={showOverlayCloak}
					handleOverlayClose={handleOverlayClose}
				/>
				<Notification />
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
