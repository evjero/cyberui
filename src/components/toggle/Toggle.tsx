import classNames from 'classnames';
import React, { JSX, useState } from 'react';
import { Triangle } from 'react-feather';
import { CSS_DEFAULT_CLASS } from '../../utils/constants';
import { Label } from '../label/Label';

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
		<div className="toggle-clip-wrapper">
			<div className={classes}>
				<button className="toggle-arrow" onClick={handlePrevious} aria-label="Previous">
					<Triangle transform="rotate(270)" />
				</button>
				<div className="toggle-label" aria-live="polite">
					<Label primary uppercase={false} size="lg" content={choices[activeIndex]} />
					<div className="toggle-indicators">
						{choices.map((_, index) => (
							<span key={index} className={`toggle-indicator ${index === activeIndex ? 'active' : ''}`} />
						))}
					</div>
				</div>
				<button className="toggle-arrow" onClick={handleNext} aria-label="Next">
					<Triangle transform="rotate(90)" />
				</button>
			</div>
		</div>
	);
}
