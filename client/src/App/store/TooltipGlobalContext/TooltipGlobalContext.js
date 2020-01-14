import ReactDOM from 'react-dom'
import React, { createContext } from 'react';

import { createTooltip, destroyTooltip } from './utils';

export const TooltipGlobalContext = createContext();

export const TooltipGlobalContextProvider = ({ children }) => {


	return (
		<TooltipGlobalContext.Provider
			value={{
				createTooltip,
				destroyTooltip
			}}
		>
			{children}
		</TooltipGlobalContext.Provider>
	);
};
