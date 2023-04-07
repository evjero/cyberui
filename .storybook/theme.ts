import { create } from '@storybook/theming/create';

export default () =>
	create({
		base: 'dark',

		colorPrimary: '#0fabfa',
		colorSecondary: '#0fabfa',

		// UI
		appBg: '#202028',
		appContentBg: '#202028',
		appBorderColor: '#393939',
		appBorderRadius: 4,

		// Typography
		fontBase: '"Rajdhani", sans-serif',
		fontCode: 'monospace',

		// Text colors
		textColor: '#f4f4f4',
		textInverseColor: '#3b404f',

		// Toolbar default and active colors
		barTextColor: '#0fabfa',
		barSelectedColor: '#0fabfa',
		barBg: '#202028',

		// Form colors
		inputBg: '#070708',
		inputBorder: '#393939',
		inputTextColor: '#f4f4f4',
		inputBorderRadius: 4,

		brandTitle: 'CyberUI',
		brandUrl: 'https://github.com/evjero/cyberui'
	});
