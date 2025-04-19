import classNames from 'classnames';

import React, { JSX } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type ButtonProps = {
	/** Main text */
	content?: string;
};

export function Button(props: ButtonProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS);
	return <button className={classes}>{props.content}</button>;
}
