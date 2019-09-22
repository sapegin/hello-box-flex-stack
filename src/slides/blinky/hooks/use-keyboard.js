import { useEffect } from 'react';
import screenfull from 'screenfull';
import { useDeck } from '../context';
import { next, previous } from '../navigation';

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
					next(context);
					break;
				case KEYS.left:
				case KEYS.up:
				case KEYS.pageUp:
					previous(context);
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
