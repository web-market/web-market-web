import React, { Component, createRef } from 'react';

import Link from '../../../../baseComponents/Link';

import classes from './styles/index.scss';

type AdminNavigationCollapseContentType = {
    setCollapseRef: (current: {}) => void,
    height: number,
    items: {
        label: string,
        link: string,
        hasRoute: boolean,
    }[]
}

class AdminNavigationCollapseContent extends Component<AdminNavigationCollapseContentType> {
    collapseContent = createRef<HTMLInputElement>();

	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.setCollapseRef(
			this.collapseContent.current
		);
	}

	get collapseHeight () {
		return this.props.height
			? {
				height: this.props.height,
				padding: 16
			} : {
				height: this.props.height,
				padding: 0,
			};
	}

	getNavCollapsedContent = () => {
		return this.props.items.map(item => {
			const content = (
				<div
					className={classes.adminNavigationListItemCollapseContent_itemContent}
				>
					{item.label}
					<div className={classes.adminNavigationListItemCollapseContent_itemIcon}></div>
				</div>
			);

			return (
				<div
					key={item.label}
					className={classes.adminNavigationListItemCollapseContent_item}
				>
					<Link
						content={content}
						link={item.link}
						hasRoute={item.hasRoute}
						className={classes.adminNavigationListItemCollapseContent_itemLink}
						activeLinkClass={classes.adminNavigationListItemCollapseContent_activeLink}
					/>
				</div>
			);
		});
	};

	render () {
		return (
			<div
				ref={this.collapseContent}
				style={this.collapseHeight}
				className={classes.adminNavigationListItemCollapseContent}
			>
				<div>
					{this.getNavCollapsedContent()}
				</div>
			</div>
		);
	}
}

export { AdminNavigationCollapseContent };
