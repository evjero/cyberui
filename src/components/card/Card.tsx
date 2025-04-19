import classNames from 'classnames';

import React, { JSX } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type CardProps = {
	/** Content */
	children?: React.ReactNode;
};

export function Card(props: CardProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS, 'card');
	return <div className={classes}>{props.children}</div>;
}
