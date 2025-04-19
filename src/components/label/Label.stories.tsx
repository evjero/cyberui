import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
	title: 'Components/Label',
	component: Label,
	parameters: {
		component: Label,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		content: 'Label',
		primary: false,
		secondary: false,
		tertiary: false,
		size: 'lg'
	}
};

export const Sizes: Story = {
	render: () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<Label content="X-Small" size="xs" />
				<Label content="Small" size="sm" />
				<Label content="Medium" size="md" />
				<Label content="Large" size="lg" />
				<Label content="X-Large" size="xl" />
				<Label content="2X-Large" size="xxl" />
			</div>
		);
	}
};

export const Emphasis: Story = {
	render: () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<Label content="Primary" primary size="lg" />
				<Label content="Secondary" secondary size="lg" />
				<Label content="Tertiary" tertiary size="lg" />
				<Label content="Quarternary" quarternary size="lg" />
			</div>
		);
	}
};
export const Glow: Story = {
	render: () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<Label content="Label" glow size="lg" />
				<Label content="Primary" glow primary size="lg" />
				<Label content="Secondary" glow secondary size="lg" />
				<Label content="Tertiary" glow tertiary size="lg" />
				<Label content="Quarternary" glow quarternary size="lg" />
			</div>
		);
	}
};
