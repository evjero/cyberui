import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		component: Card,
		componentSubtitle: 'Cards are simple, often square, divs that can contain some set of content, usually a quick blurb or image under a header',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

