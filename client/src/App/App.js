import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormsContextProvider from './store/FormsGlobalContext';
import AppContextProvider, { AppGlobalContext } from './store/AppGlobalContext';

import OverlayCloak from '../baseComponents/OverlayCloak';
import AdminPanel from '../components/Admin/AdminPanel';

import Link from '../baseComponents/Link';

import '../styles/index.scss';

class App extends Component {
	static contextType = AppGlobalContext;

	render () {
		const { showOverlayCloak, handleClose } = this.context;

		return (
			<FormsContextProvider>
				<Router>
					<Switch>
						<Route path="/adminpanel" component={AdminPanel} />
						<Route path="/">
							<Link link="/adminpanel" content="Admin panel" />
						</Route>
					</Switch>
				</Router>
				<OverlayCloak
					show={showOverlayCloak}
					handleClose={handleClose}
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
