import React, { Component } from 'react';
import Dropdown from '../../Dropdown';

class DropdownAdapter extends Component {
	render () {
		const {
			initialValue
		} = this.props;

		return (
			<Dropdown
				initialValue={initialValue}
				{...this.props}
			/>
		);
	}
}

export default DropdownAdapter;
