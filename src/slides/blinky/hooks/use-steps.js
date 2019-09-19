import { useEffect } from 'react';
import { useDeck } from '../context';

export default function useSteps(newNumberOfSteps) {
	const { currentStep, setNumberOfSteps } = useDeck();
	useEffect(() => {
		console.log('enter');
		setNumberOfSteps(newNumberOfSteps);
		return () => {
			console.log('exit');
			setNumberOfSteps(0);
		};
	}, []);
	return currentStep;
}
