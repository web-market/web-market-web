import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { isUndefined } from '../../utils';

const NotificationContent = (
	{
		id,
		type,
		message,
		duration,
		removeNotification
	}
) => {
	useEffect(() => {
		let timer;

		if (!isUndefined(duration)) {
			timer = setTimeout(handleRemoveNotification, duration);
		}

		return () => clearTimeout(timer);
	}, []);

	const handleRemoveNotification = () => {
		removeNotification(id);
	};

	return (
		<div>
			{ message }
			{ type }
			{ id }
			<br />
			<div onClick={handleRemoveNotification}>close</div>
		</div>
	);
};

NotificationContent.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	message: PropTypes.string,
	duration: PropTypes.number,
	removeNotification: PropTypes.func
};

export default NotificationContent;
