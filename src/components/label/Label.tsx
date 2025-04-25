import classNames from 'classnames';
import React, { JSX } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';
import { Size } from '../../utils/sizes';

export type LabelProps = {
	/**
	 * The text content to display inside the label.
	 */
	content?: string;

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
	 * Specifies the size of the label.
	 * Accepts predefined size values such as 'xs', 'sm', 'md', 'lg', 'xl', or 'xxl'.
	 */
	size?: Size;

	/**
	 * If true, converts the label content to uppercase.
	 * Defaults to true if not specified.
	 */
	uppercase?: boolean;

	/**
	 * If true, applies a glow effect to the label.
	 * Defaults to false if not specified.
	 */
	glow?: boolean;
};

export function Label({ content, primary, secondary, tertiary, quarternary, size, uppercase, glow }: LabelProps): JSX.Element {
	const classes = classNames(
		CSS_DEFAULT_CLASS,
		{
			primary: primary,
			secondary: secondary,
			tertiary: tertiary,
			quarternary: quarternary,
			glow: glow
		},
		`size-${size ?? 'md'}`
	);
	const textContent = uppercase === false ? content : content?.toUpperCase();
	return <label className={classes}>{textContent}</label>;
}
