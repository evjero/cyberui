import classNames from 'classnames';
import React, { JSX } from 'react';
import { Divider } from '../../components/divider/Divider';
import { Switch } from '../../components/switch/Switch';
import { Toggle } from '../../components/toggle/Toggle';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';
import { MenuOption } from './MenuOption';

export function MenuInterface(): JSX.Element {
	const classes = classNames(CSS_DEFAULT_CLASS, 'menu-interface');
	return (
		<div className={classes}>
			<MenuOption label="Colorblind Modes" option={<Toggle choices={['Off', 'On', 'Three', 'Four']} />} />
			<MenuOption label="Damage Numbers Mode" option={<Toggle choices={['Off', 'On', 'None', 'Both']} />} />
			<MenuOption label="Sticky Damage Numbers" option={<Toggle choices={['None', 'Both', 'Off', 'On']} />} />
			<MenuOption label="Hit Indicator" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Threat and Damage Indicator" option={<Toggle choices={['Some', 'Off', 'On']} />} />
			<Divider text="HUD Visibility" />
			<MenuOption label="Minimap" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Health Bar" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Stamina and Oxygen" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Boss Health Bars" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Background Chats" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Ammo Counter" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Hints" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Action Buttons" option={<Switch choices={['Off', 'On']} />} />
			<MenuOption label="Activity Log" option={<Switch choices={['Off', 'On']} />} />
		</div>
	);
}
