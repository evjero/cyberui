import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		component: Button,
		componentSubtitle: 'Buttons allow for primary user actions, denoting what can be done',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		content: 'Button'
	}
};

