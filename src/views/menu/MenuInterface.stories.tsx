import type { Meta, StoryObj } from '@storybook/react';
import { MenuInterface } from './MenuInterface';

const meta: Meta<typeof MenuInterface> = {
	title: 'Views/Menu/Menu Interface',
	component: MenuInterface,
	parameters: {
		component: MenuInterface,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MenuInterface>;

export const Default: Story = {};
