// .storybook/manager.js

import { addons } from '@storybook/addons';
import theme from './theme';

//This sets the main theme (not for components)
addons.setConfig({
	sidebar: {
		showRoots: false
	},
	theme: theme()
});
