import classNames from 'classnames';
import React, { JSX } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';
import { Label } from '../label/Label';

type DividerProps = {
	/** Text to display within the divider as a header */
	text: string;
};

export function Divider({ text }: DividerProps): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS, 'divider');

	return (
		<div className={classes}>
			<Label uppercase={false} size="lg" content={text} />
		</div>
	);
}
