import classNames from 'classnames';
import React, { JSX } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type HeaderProps = {
	/**
	 * Header text
	 */
	content?: string;

	/**
	 * Header size, e.g., `h1` (default), `h2`
	 */
	size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	/**
	 * Applies the "primary" style to the label.
	 */
	primary?: boolean;

	/**
	 * Applies the "secondary" style to the label.
	 */
	secondary?: boolean;

	/**
	 * Applies the "tertiary" style to the label.
	 */
	tertiary?: boolean;

	/**
	 * Applies the "quarternary" style to the label.
	 */
	quarternary?: boolean;

	/**
	 * Applies the "quarternary" style to the label.
	 */
	success?: boolean;

	/**
	 * If true, applies a glow effect to the label.
	 * Defaults to false if not specified.
	 */
	glow?: boolean;
};

export function Header({ content, size, glow, primary, quarternary, secondary, tertiary, success }: HeaderProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS, {
		primary: primary,
		secondary: secondary,
		tertiary: tertiary,
		quarternary: quarternary,
		success: success,
		glow: glow
	});

	const header = (size as React.ElementType) ?? 'h1';
	return React.createElement(header, { className: classes }, content);
}
