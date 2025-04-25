import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		component: Header,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
	args: {
		content: 'Header',
		size: 'h1'
	}
};

export const Sizes = () => {
	return (
		<>
			<Header size="h1" content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h2" content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h4" content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h5" content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h6" content="APPROX. ENHANCEMENT BOOSTERS" />
		</>
	);
};

export const Emphasis = () => {
	return (
		<>
			<Header size="h3" primary content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" secondary content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" tertiary content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" quarternary content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" success content="APPROX. ENHANCEMENT BOOSTERS" />
		</>
	);
};

export const Glow = () => {
	return (
		<>
			<Header size="h3" primary glow content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" secondary glow content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" tertiary glow content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" quarternary glow content="APPROX. ENHANCEMENT BOOSTERS" />
			<Header size="h3" success glow content="APPROX. ENHANCEMENT BOOSTERS" />
		</>
	);
};
