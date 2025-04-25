import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
	title: 'Components/Divider',
	component: Divider,
	parameters: {
		component: Divider,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
	args: {
		text: 'DIVIDER Menu'
	}
};
