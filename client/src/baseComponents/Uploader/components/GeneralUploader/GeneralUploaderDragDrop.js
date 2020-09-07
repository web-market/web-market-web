import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClassNames from 'classnames';
import { PaddingBox } from '../../../PaddingBox/PaddingBox';
import { Icon } from '../../../Icon/Icon';

import classes from './styles/index.scss';
import { download } from '../../../../icons';

class GeneralUploaderDragDrop extends Component {
	state = {
		drag: false
	};

	dropRef = React.createRef();

	componentDidMount () {
		const div = this.dropRef.current;
		this.dragCounter = 0;
		div.addEventListener('dragenter', this.handleDragIn);
		div.addEventListener('dragleave', this.handleDragOut);
		div.addEventListener('dragover', this.handleDrag);
		div.addEventListener('drop', this.handleDrop);
	}

	componentWillUnmount () {
		const div = this.dropRef.current;
		div.removeEventListener('dragenter', this.handleDragIn);
		div.removeEventListener('dragleave', this.handleDragOut);
		div.removeEventListener('dragover', this.handleDrag);
		div.removeEventListener('drop', this.handleDrop);
	}

	handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	handleDragIn = (e) => {
		e.preventDefault();
		e.stopPropagation();

		//eslint-disable-next-line
		this.dragCounter++;

		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
			this.setState({ drag: true });
		}
	};

	handleDragOut = (e) => {
		e.preventDefault();
		e.stopPropagation();

		//eslint-disable-next-line
		this.dragCounter--;

		if (this.dragCounter > 0) return;
		this.setState({ drag: false });
	};

	handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		this.setState({ drag: false });
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			this.props.handleAddFile(e, e.dataTransfer.files);

			e.dataTransfer.clearData();

			this.dragCounter = 0;
		}
	};

	render () {
		const componentClassName = ClassNames(
			{
				[classes.generalUploaderDragDrop__onDragIn]: this.state.drag
			},
			classes.generalUploaderDragDrop
		);

		const componentIconClassName = ClassNames(
			{
				[classes.generalUploaderDragDrop_uploadIcon__onDragIn]: this.state.drag
			},
			classes.generalUploaderDragDrop_uploadIcon
		);

		return (
			<div
				ref={this.dropRef}
				className={componentClassName}
			>
				<div
					className={classes.generalUploaderDragDrop_innerContent}
				>
					<Icon
						icon={download}
						className={componentIconClassName}
					/>
					<div>!!перетащите</div>
					<PaddingBox vrSmall>!!или</PaddingBox>
					{this.props.children}
				</div>
			</div>
		);
	}
}

GeneralUploaderDragDrop.propTypes = {
	children: PropTypes.object,
	handleAddFile: PropTypes.func
};

export default GeneralUploaderDragDrop;
