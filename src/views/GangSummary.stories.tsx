import type { Meta, StoryObj } from '@storybook/react';

import { GangSummary } from './GangSummary';

const meta: Meta<typeof GangSummary> = {
	title: 'Components/GangSummary',
	component: GangSummary,
	parameters: {
		component: GangSummary,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof GangSummary>;

export const Default: Story = {
	args: {
		gang: {
			name: 'Maelstrom',
			size: [30, 40],
			currentLeader: 'Simon "Royce" Randall',
			territories: ['Watson'],
			characteristics: [
				'Heavy combat enhacement',
				'Pain editors',
				'Reflex boosters',
				'Red Eye, street optics modification (unknown capabilities, multiple possible vision modes)'
			]
		}
	}
};

