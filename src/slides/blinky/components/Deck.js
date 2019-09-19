// Inspired by mdx-deck
import React, { useState, useMemo } from 'react';
import { Router } from '@reach/router';
import SlideBase from './Slide';
import Context from '../context';
import useKeyboard from '../hooks/use-keyboard';

const Keyboard = () => {
	useKeyboard();
	return false;
};

export default function Deck({ children }) {
	const slides = React.Children.toArray(children);
	const [numberOfSteps, setNumberOfSteps] = useState(0);
	const [currentStep, setCurrentStep] = useState(null);
	const context = useMemo(
		() => ({
			numberOfSlides: slides.length,
			numberOfSteps,
			currentStep,
			setNumberOfSteps,
			setCurrentStep,
		}),
		[slides, numberOfSteps, currentStep]
	);
	return (
		<Context.Provider value={context}>
			<Keyboard />
			<Router>
				{slides.map((slide, index) => {
					const Slide = () => <SlideBase>{slide}</SlideBase>;
					return <Slide key={index} path={`/${index}`} default={index === 0} />;
				})}
			</Router>
		</Context.Provider>
	);
}
