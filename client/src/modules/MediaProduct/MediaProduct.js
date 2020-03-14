import React from 'react';

import MediaProductContextProvider from './store';


import AdminControlHeader from '../../components/AdminControlHeader';
import MediaProductContent from './components/MediaProductContent';

const MediaProduct = () => {
	return (
		<>
			<AdminControlHeader
				label="!!!Медиа файлы"
			/>
			<MediaProductContextProvider>
				<MediaProductContent />
			</MediaProductContextProvider>
		</>
	);
};

export { MediaProduct };
