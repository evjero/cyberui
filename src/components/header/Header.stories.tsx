import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		component: Header,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
	args: {
		children: 'Header',
		size: 'h1'
	}
};

export const Sizes = () => {
	return (
		<React.Fragment>
			<Header size="h1">APPROX. ENHANCEMENT BOOSTERS</Header>
			<Header size="h2">APPROX. ENHANCEMENT BOOSTERS</Header>
			<Header size="h3">APPROX. ENHANCEMENT BOOSTERS</Header>
			<Header size="h4">APPROX. ENHANCEMENT BOOSTERS</Header>
			<Header size="h5">APPROX. ENHANCEMENT BOOSTERS</Header>
			<Header size="h6">APPROX. ENHANCEMENT BOOSTERS</Header>
		</React.Fragment>
	);
};

