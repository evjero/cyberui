import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/cyberui.scss';
import './overrides.scss';

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
			theme: themes.dark
		},
		layout: 'fullscreen'
	}
};

export default preview;

