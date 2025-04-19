import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
	title: 'Components/Toggle',
	component: Toggle,
	parameters: {
		component: Toggle,
		componentSubtitle: '',
		controls: { hideNoControlsWarning: true }
	}
	// tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	args: {
		choices: ['Choice 1', 'Choice 2', 'Choice 3'],
		onChange: (activeIndex) => {
			console.log('Active choice index:', activeIndex);
		}
	}
};
