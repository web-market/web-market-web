import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Link from '../../../../../baseComponents/Link';

import { profileItem } from './store/staticData'
import styles from './styles/index.scss';

class AdminNavProfileItems extends Component {
	constructor (props) {
		super(props);
		this.componentRef = React.createRef();
	}

	getItemContent = () => {
		return profileItem.map(item => {
			return (
				<div
					className={styles.adminNavProfileItem}
					key={item.label}
				>
					<Link
						label={item.label}
						link={item.link}
						hasRoute={item.hasRoute}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<div
				ref={this.componentRef}
				className={styles.adminNavProfile_collapserContent}
			>
				{this.getItemContent()}
			</div>
		);
	}
}

// AdminNavProfileItems.defaultProps = {};
//
// AdminNavProfileItems.propTypes = {};

export { AdminNavProfileItems };
