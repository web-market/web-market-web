import React, { Component } from 'react';
import Dropdown from '../../Dropdown';

class DropdownAdapter extends Component {
	render () {
		return (
			<Dropdown
				{...this.props}
			/>
		);
	}
}

export default DropdownAdapter;
