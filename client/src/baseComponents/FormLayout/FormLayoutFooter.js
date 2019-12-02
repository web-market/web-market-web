import React from 'react';
import PaddingBox from '../PaddingBox';
import classes from './style/index.scss';
// import PropTypes from 'prop-types';

const FormLayoutFooter = () => {
	return (
		<PaddingBox
			vrTiny
			hrNormal
			className={classes.formLayoutFooter}
		>
			{/*use grids for buttons group*/}
			{ 'save button' }
		</PaddingBox>
	);
};

// FormLayoutFooter.defaultProps = {};

// FormLayoutFooter.propTypes = {};

export default FormLayoutFooter;
