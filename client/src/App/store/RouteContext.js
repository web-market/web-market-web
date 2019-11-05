import React, { createContext } from 'react';

import { withRouter } from 'react-router-dom';

const RouteContext = createContext();

function RouteContextProvider (props) {
	const { match, location, history } = props;

	return (
		<RouteContext.Provider
			value={{
				match,
				location,
				history
			}}
		>
			{props.children}
		</RouteContext.Provider>
	);
}

const RouteContextProviderWithRouter = withRouter(RouteContextProvider);
export { RouteContext, RouteContextProviderWithRouter };
