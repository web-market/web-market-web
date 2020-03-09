import React, { useContext } from 'react';

import { AppGlobalContext } from '../../App/store/AppGlobalContext';

import NotificationContent from './NotificationContent';
import classes from './styles/index.scss';

const NotificationContentWrapper = () => {
	const { notifications, removeNotification } = useContext(AppGlobalContext);

	return (
		notifications.length !== 0 && (
			<div className={classes.notificationContentWrapper}>
				{
					notifications.map(notification => {
						return (
							<NotificationContent
								id={notification.id}
								key={notification.id}
								type={notification.type}
								message={notification.message}
								duration={notification.duration}
								removeNotification={removeNotification}
							/>
						);
					})
				}
			</div>
		)
	);
};

export default NotificationContentWrapper;
