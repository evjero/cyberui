import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
	title: 'Components/Switch',
	component: Switch,
	parameters: {
		component: Switch,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		choices: ['OFF', 'ON'],
		onChange: (activeIndex) => {
			console.log('Active choice index:', activeIndex);
		}
	}
};
