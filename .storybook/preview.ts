import type { Preview } from '@storybook/react';
import '../src/cyberui.scss';
import './overrides.scss';
import theme from './theme';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			expanded: false,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		docs: {
			theme: theme()
		},
		layout: 'fullscreen'
	}
};

export default preview;

