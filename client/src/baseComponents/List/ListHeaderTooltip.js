import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import OverlayPoint from '../OverlayPoint';
import { moreAlt } from '../../icons';
import Button from '../Button';

import classes from './styles/index.scss';
import { ListHeaderTooltipList } from './ListHeaderTooltipList';

const ListHeaderTooltip = (
	{
		actionList
	}
) => {
	const [show, setShow] = useState(false);
	const tooltipActionRef = useRef(null);

	const handleTooltipActionClick = () => {
		setShow(!show);
	};

	return (
		<div
			ref={tooltipActionRef}
			className={classes.listHeaderTooltip}
		>
			<Button
				noBorder
				size="small"
				transparent
				icon={moreAlt}
				actionHandler={handleTooltipActionClick}
				className={classes.listHeaderTooltip_button}
			/>
			{
				show && (
					<OverlayPoint
						position="bottom-left-center"
						onClose={handleTooltipActionClick}
						componentRef={tooltipActionRef.current}
						render={() => {
							return (
								<ListHeaderTooltipList
									actionList={actionList}
								/>
							);
						}
						}
					/>
				)
			}
		</div>
	);
};

ListHeaderTooltip.propTypes = {
	actionList: PropTypes.array.isRequired
};

export { ListHeaderTooltip };
