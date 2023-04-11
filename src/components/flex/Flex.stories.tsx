import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from '../button/Button';
import { Flex, FlexProps } from './Flex';

const meta: Meta<typeof Flex> = {
	title: 'Components/Flex',
	component: Flex,
	parameters: {
		component: Flex,
		componentSubtitle: 'A helpful opinioned wrapper for flexbox layout',
		controls: { hideNoControlsWarning: true }
	},
	tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = (args: FlexProps) => {
	return (
		<Flex {...args}>
			<Button content="1" />
			<Button content="2" />
			<Button content="3" />
			<Button content="4" />
			<Button content="5" />
		</Flex>
	);
};
Default.args = {
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignContent: 'stretch'
};
Default.argTypes = {
	children: {
		control: false
	},
	key: {
		control: false
	},
	ref: {
		control: false
	},
	flexDirection: {
		options: ['row', 'column', 'row-reversed', 'column-reversed'],
		control: {
			type: 'radio'
		}
	},
	flexWrap: {
		options: ['nowrap', 'wrap', 'wrap-reverse'],
		control: {
			type: 'radio'
		}
	},
	alignContent: {
		options: ['normal', 'start', 'end', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
		control: {
			type: 'radio'
		}
	},
	justifyContent: {
		options: ['normal', 'start', 'end', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
		control: {
			type: 'radio'
		}
	},
	alignItems: {
		options: ['normal', 'stretch', 'left', 'center', 'right', 'justified'],
		control: {
			type: 'radio'
		}
	}
};

