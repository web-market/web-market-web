import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../baseComponents/Link';

import { profileItem } from './staticData/staticData';
import classes from './styles/index.scss';
import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';

class AdminNavigationProfileICollapseContent extends Component {
	constructor (props) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidMount () {
		this.props.setCollapseRef(
			this.componentRef.current
		);
	}

	getItemContent = () => {
		return profileItem.map(item => {
			const content = (
				<div className={classes.adminNavigationProfileICollapseContent_itemContent}>
					{item.label}
					<div className={classes.adminNavigationProfileICollapseContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					className={classes.adminNavigationProfileICollapseContent_item}
				>
					<Link
						content={content}
						link={item.link}
						hasRoute={item.hasRoute}
						activeLinkClass={classes.adminNavigationProfileICollapseContent_itemActiveLink}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<div
				ref={this.componentRef}
				style={{ height: this.props.height }}
				className={classes.adminNavigationProfile_collapser}
			>
				<PaddingBox
					hrSmall
					vrUltraTiny
				>
					{this.getItemContent()}
				</PaddingBox>
			</div>
		);
	}
}

AdminNavigationProfileICollapseContent.propTypes = {
	setCollapseRef: PropTypes.func,
	height: PropTypes.number
};

export { AdminNavigationProfileICollapseContent };
