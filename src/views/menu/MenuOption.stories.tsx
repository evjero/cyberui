import type { Meta } from '@storybook/react';
import React from 'react';
import { Toggle } from '../../components/toggle/Toggle';
import { MenuOption } from './MenuOption';

const meta: Meta<typeof MenuOption> = {
	title: 'Views/Menu/Option',
	component: MenuOption,
	parameters: {
		component: MenuOption,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
// type Story = StoryObj<typeof MenuOption>;

export const Default = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<MenuOption label="Menu Option 1" option={<Toggle choices={['Off', 'On']} />} />
		</div>
	);
};
