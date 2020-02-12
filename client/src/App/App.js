import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormsContextProvider from './store/FormsGlobalContext';
import AppContextProvider, { AppGlobalContext } from './store/AppGlobalContext';

import OverlayCloak from '../baseComponents/OverlayCloak';
import Sandbox from '../Sandbox/Sandbox';
import AdminPanel from '../components/Admin/AdminPanel';
import StoreModule from '../components/Store/StoreModule';

import '../styles/index.scss';

class App extends Component {
	static contextType = AppGlobalContext;

	render () {
		const { showOverlayCloak, handleClose } = this.context;

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
