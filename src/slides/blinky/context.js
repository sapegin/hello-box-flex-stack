import { createContext, useContext } from 'react';

const Context = createContext({
	numberOfSlides: 0,
	numberOfSteps: 0,
	currentStep: 0,
	setNumberOfSteps() {},
	setCurrentStep() {},
});

export default Context;

export const useDeck = () => useContext(Context);
