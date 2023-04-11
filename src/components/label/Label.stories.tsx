import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
	title: 'Components/Label',
	component: Label,
	parameters: {
		component: Label,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		content: 'Label'
	}
};

