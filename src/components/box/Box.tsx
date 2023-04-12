import classNames from 'classnames';
import * as React from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type BoxProps = {
	/** Content */
	children?: React.ReactNode;
	/** Optional flex sizing specification */
	flex?: React.CSSProperties['flex'];
};

export function Box(props: BoxProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS, 'box');
	return (
		<div className={classes} style={{ flex: props.flex }}>
			{props.children}
		</div>
	);
}
