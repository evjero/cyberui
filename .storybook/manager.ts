// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

//This sets the main theme (not for components)
addons.setConfig({
	sidebar: {
		showRoots: false
	},
	theme: themes.dark
});
