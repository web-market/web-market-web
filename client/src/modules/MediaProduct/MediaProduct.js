import React from 'react';

import MediaProductContextProvider from './store';
import MediaProductModalsProvider from './components/MediaProductModalsProvider';

import MediaProductHeader from './components/MediaProductHeader';
import MediaProductContent from './components/MediaProductContent';

const MediaProduct = () => {
	return (
		<MediaProductContextProvider>
			<MediaProductModalsProvider>
				<MediaProductHeader />
				<MediaProductContent />
			</MediaProductModalsProvider>
		</MediaProductContextProvider>
	);
};

export { MediaProduct };
