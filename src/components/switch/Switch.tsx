import classNames from 'classnames';
import React, { JSX, useState } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

type SwitchProps = {
	/**
	 * Array of two choices to switch between.
	 */
	choices: [string, string];

	/**
	 * Optional callback when the active choice changes.
	 */
	onChange?: (isActive: boolean) => void;
};

export function Switch({ choices, onChange }: SwitchProps): JSX.Element {
	const [isActive, setIsActive] = useState(false);

	const toggleState = () => {
		const newState = !isActive;
		setIsActive(newState);
		onChange?.(newState);
	};

	const classes = classNames(CSS_DEFAULT_CLASS, 'switch');

	return (
		<div className={classes}>
			<div className={classNames('switch-choice-clip-wrapper', { active: !isActive })}>
				<span
					className={classNames('switch-choice', { active: !isActive })}
					onClick={() => {
						if (isActive) toggleState();
					}}
				>
					{choices[0].toUpperCase()}
				</span>
			</div>
			<div className={classNames('switch-choice-clip-wrapper', { active: isActive })}>
				<span
					className={classNames('switch-choice', { active: isActive })}
					onClick={() => {
						if (!isActive) toggleState();
					}}
				>
					{choices[1].toUpperCase()}
				</span>
			</div>
		</div>
	);
}
