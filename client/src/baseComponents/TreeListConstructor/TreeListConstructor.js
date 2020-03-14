import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { initBuildTree, buildTree } from './utils';

const TreeListConstructor = (
	{
		idKey,
		render,
		linearList,
		referenceKey,
		childrenListKey
	}
) => {
	initBuildTree({ idKey, referenceKey, childrenListKey });

	const treeList = useMemo(() => {
		return buildTree(linearList);
	}, [linearList]);

	return (
		<>
			{ render({ treeList })}
		</>
	);
};

TreeListConstructor.defaultProps = {
	idKey: 'id',
	childrenListKey: 'childrenList'
};

TreeListConstructor.propTypes = {
	idKey: PropTypes.string,
	render: PropTypes.func.isRequired,
	childrenListKey: PropTypes.string,
	linearList: PropTypes.array.isRequired,
	referenceKey: PropTypes.string.isRequired
};

export { TreeListConstructor };
