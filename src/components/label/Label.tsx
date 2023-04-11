import classNames from 'classnames';
import * as React from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type LabelProps = {
	className?: string;
	content?: string;
};

export function Label(props: LabelProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS);
	return <label className={classes}>{props.content}</label>;
}
