import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { AppGlobalContext } from '../../App/store/AppGlobalContext';

import NotificationCard from './NotificationCard';
import classes from './styles/index.scss';

const NotificationContentWrapper = () => {
	const { notifications, removeNotification } = useContext(AppGlobalContext);

	return (
		<TransitionGroup className={classes.notificationContentWrapper}>
			{
				notifications.length !== 0 && notifications.map(notification => {
						return (
							<CSSTransition
								in
								unmountOnExit
								timeout={500}
								key={notification.id}
								classNames={{
									enter: classes['notificationCard-enter'],
									enterActive: classes['notificationCard-enter-active'],
									exit: classes['notificationCard-exit'],
									exitActive: classes['notificationCard-exit-active']
								}}
							>
								<NotificationCard
									id={notification.id}
									type={notification.type}
									message={notification.message}
									duration={notification.duration}
									removeNotification={removeNotification}
								/>
							</CSSTransition>
						);
					})
			}
		</TransitionGroup>
	);
};

export default NotificationContentWrapper;
