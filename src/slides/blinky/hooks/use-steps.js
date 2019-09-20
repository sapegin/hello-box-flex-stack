import { useEffect } from 'react';
import { useDeck } from '../context';

export default function useSteps(newNumberOfSteps) {
	const { currentStep, setNumberOfSteps } = useDeck();
	useEffect(() => {
		setNumberOfSteps(newNumberOfSteps);
		return () => {
			setNumberOfSteps(0);
		};
	}, [newNumberOfSteps, setNumberOfSteps]);
	return currentStep;
}
