import React from 'react';

import Collpase from '../../baseComponents/Collapser';

const DevCollapser = () => {
	return (
		<>
			<Collpase
				label="Collapser"
				open
				content={(
					<div>
						<div>dadasdas</div>
						<div>dadasdas</div>
						<div>dadasdas</div>
						<div>dadasdas</div>
						<div>dadasdas</div>
						<div>dadasdas</div>
						<div>dadasdas</div>
					</div>
				)}
			/>
			<div>test</div>
		</>
	);
};

export { DevCollapser };
