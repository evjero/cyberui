import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../lib/dist'],
	typescript: {
		reactDocgen: 'react-docgen'
	},
	previewHead: (head) => `
		${head}
		<link href="/fonts/rajdhani-v15-latin-300.woff" />
		<link href="/fonts/rajdhani-v15-latin-600.woff" />
		<link href="/fonts/rajdhani-v15-latin-700.woff" />
		<link href="/fonts/rajdhani-v15-latin-regular.woff" />
		<link href="https://cdn.lineicons.com/5.0/lineicons.css" rel="stylesheet" />
	`,
	viteFinal: async (config) => {
		// Add support for `.es.js` extensions
		config.resolve = config.resolve || {};
		config.resolve.extensions = config.resolve.extensions || ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'];
		config.resolve.extensions.push('.es.js');
		return config;
	}
};
export default config;
