import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
	title: 'Components/Box',
	component: Box,
	parameters: {
		component: Box,
		componentSubtitle: 'Boxs are simple, often square, divs that can contain some set of content, less opinioned than a card',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {};

