import { useEffect } from 'react';
import { globalHistory } from '@reach/router';
import screenfull from 'screenfull';
import { navigate } from '@reach/router';
import { useDeck } from '../context';

const getCurrentSlide = () =>
	parseInt(globalHistory.location.pathname.replace(/^\//, '')) || 0;

const nextSlide = numberOfSlides =>
	navigate(`/${Math.min(getCurrentSlide() + 1, numberOfSlides - 1)}`);

const previousSlide = () => navigate(`/${Math.max(getCurrentSlide() - 1, 0)}`);

const KEYS = {
	right: 39,
	left: 37,
	up: 38,
	down: 40,
	space: 32,
	enter: 13,
	esc: 27,
	pageUp: 33,
	pageDown: 34,
};

const INPUT_ELEMENTS = ['input', 'select', 'textarea', 'a', 'button'];

export default function useKeyboard() {
	const context = useDeck();
	useEffect(() => {
		const {
			numberOfSlides,
			numberOfSteps,
			currentStep,
			setCurrentStep,
		} = context;

		const handleKeyDown = ({ keyCode, metaKey, ctrlKey, altKey }) => {
			if (metaKey || ctrlKey) {
				return;
			}

			// Ignore custom keyboard shortcuts when elements are focused
			const element = document.activeElement.tagName.toLowerCase();
			if (INPUT_ELEMENTS.includes(element)) {
				return;
			}

			switch (keyCode) {
				case KEYS.right:
				case KEYS.down:
				case KEYS.pageDown:
				case KEYS.space:
					if (currentStep < numberOfSteps) {
						setCurrentStep(currentStep + 1);
					} else {
						nextSlide(numberOfSlides);
						setCurrentStep(0);
					}
					break;
				case KEYS.left:
				case KEYS.up:
				case KEYS.pageUp:
					previousSlide().then(() => {
						console.log('navigated', numberOfSteps);
					});
					// setCurrentStep(numberOfSteps); // TODO
					break;
				case KEYS.enter:
					if (altKey) {
						screenfull.toggle();
					}
					break;
				case KEYS.esc:
					screenfull.toggle();
					break;
				default:
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [context]);
}
