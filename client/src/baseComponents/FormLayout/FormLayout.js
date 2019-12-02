import React from 'react';
import PropTypes from 'prop-types';

import PaddingBox from '../PaddingBox';

import FormLayoutHeader from './FormLayoutHeader';
import FormLayoutFooter from './FormLayoutFooter';

const FormLayout = ({ children, padding, title }) => {
	return (
		<>
			{
				title && (
					<FormLayoutHeader
						padding={padding}
						title={title}
					/>
				)
			}
			<PaddingBox {...padding}>
				{ children }
			</PaddingBox>
			<FormLayoutFooter />
		</>
	);
};

FormLayout.defaultProps = {
	padding: { small: true }
};

FormLayout.propTypes = {
	padding: PropTypes.object,
	title: PropTypes.string,
};

export { FormLayout };
