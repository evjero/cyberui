import React, { JSX } from 'react';
import { Label } from '../../components/label/Label';

type MenuOptionProps = {
	/** Text to describe the option */
	label: string;
	/** Option to operate on */
	option: React.ReactNode;
};

export function MenuOption({ label, option }: MenuOptionProps): JSX.Element {
	return (
		<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0.25rem 1rem' }}>
			<Label secondary uppercase={false} size="lg" content={label} />
			{option}
		</div>
	);
}
