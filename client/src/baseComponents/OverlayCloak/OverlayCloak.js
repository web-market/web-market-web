import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import classes from './styles/index.scss';

class OverlayCloak extends PureComponent {
	render () {
		const componentClassName = ClassNames(
			classes.overlay_cloak,
			{
				[classes.overlay_cloak__show]: this.props.show
			}
		);

		return (
			<div
				onClick={this.props.handleClose}
				className={componentClassName}
			>
			</div>
		);
	}
}

OverlayCloak.defaultProps = {
	handleClose: () => {}
};

OverlayCloak.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export { OverlayCloak };
