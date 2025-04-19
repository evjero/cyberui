import classNames from 'classnames';
import React, { JSX, useState } from 'react';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';

type ToggleProps = {
	/**
	 * Array of choices to toggle between.
	 */
	choices: string[];

	/**
	 * Optional callback when the active choice changes.
	 */
	onChange?: (activeIndex: number) => void;
};

export function Toggle({ choices, onChange }: ToggleProps): JSX.Element {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrevious = () => {
		const newIndex = (activeIndex - 1 + choices.length) % choices.length;
		setActiveIndex(newIndex);
		onChange?.(newIndex);
	};

	const handleNext = () => {
		const newIndex = (activeIndex + 1) % choices.length;
		setActiveIndex(newIndex);
		onChange?.(newIndex);
	};

	const classes = classNames(CSS_DEFAULT_CLASS, 'toggle');

	return (
		<div className={classes}>
			<button className="toggle-arrow" onClick={handlePrevious} aria-label="Previous">
				&lt;
			</button>
			<div className="toggle-choice">{choices[activeIndex]}</div>
			<button className="toggle-arrow" onClick={handleNext} aria-label="Next">
				&gt;
			</button>
			<div className="toggle-indicators">
				{choices.map((_, index) => (
					<span key={index} className={`toggle-indicator ${index === activeIndex ? 'active' : ''}`} />
				))}
			</div>
		</div>
	);
}
