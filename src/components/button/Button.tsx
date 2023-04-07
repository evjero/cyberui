import classNames from 'classnames';
import * as React from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

type ButtonProps = {
	className?: string;
	content?: string;
};

export function Button(props: ButtonProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS);
	return <button className={classes}>{props.content}</button>;
}
