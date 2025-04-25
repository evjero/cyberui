import classNames from 'classnames';

import React, { JSX } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

export type ButtonProps = {
	/** Main text */
	content?: string;
	/**
	 * If true, converts the label content to uppercase.
	 * Defaults to true if not specified.
	 */
	uppercase?: boolean;
};

export function Button({ content, uppercase }: ButtonProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS);
	const textContent = uppercase === false ? content : content?.toUpperCase();
	// Calculate text width
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');
	context!.font = '20px Rajdhani, Segoe UI, Tahoma, Geneva, Verdana, sans-serif'; // Match the font defined in SCSS
	const textWidth = context!.measureText(textContent ?? '').width;

	// Add padding (32px left + 32px right from SCSS)
	const totalWidth = textWidth + 32 * 2;

	return (
		<div className="button-clip-wrapper" style={{ width: totalWidth }}>
			<button className={classes}>{textContent}</button>
		</div>
	);
}
