import React from 'react';

import classNames from 'classnames';
import classes from './styles/index.scss';

const PendingCloak = () => {
	const FirstPoint = classNames(
		classes.pendingCloak_point,
		classes.pendingCloak_point_1
	);

	const SecondPoint = classNames(
		classes.pendingCloak_point,
		classes.pendingCloak_point_2
	);

	const ThirdPoint = classNames(
		classes.pendingCloak_point,
		classes.pendingCloak_point_3
	);

	return (
		<div
			className={classes.pendingCloak}
		>
			<div className={classes.pendingCloak_container}>
				<span className={FirstPoint}></span>
				<span className={SecondPoint}></span>
				<span className={ThirdPoint}></span>
			</div>
		</div>
	);
};

export { PendingCloak };
