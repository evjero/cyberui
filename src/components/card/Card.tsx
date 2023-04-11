import classNames from 'classnames';
import * as React from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type CardProps = {
	/** Main text or label */
	content?: string;
	/** Description of  */
	label?: string;
};

//TODO
export function Card(props: CardProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS, 'card');
	return <div className={classes}>{props.content}</div>;
}
