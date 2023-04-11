import classNames from 'classnames';
import * as React from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type HeaderProps = {
	/** Header text */
	children?: React.ReactNode;
	/** Header size, e.g., `h1` (default), `h2` */
	size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Header(props: HeaderProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS);

	const header = (props.size as React.ElementType) ?? 'h1';
	return React.createElement(header, { className: classes, children: props.children });
}
