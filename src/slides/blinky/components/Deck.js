// Inspired by mdx-deck
import React, { useState, useMemo } from 'react';
import { Router } from '@reach/router';
import SlideBase from './Slide';
import Context from '../context';
import useKeyboard from '../hooks/use-keyboard';
import FadeRouter from './FadeRouter';

const Keyboard = () => {
	useKeyboard();
	return false;
};

export default function Deck({ children }) {
	const [numberOfSteps, setNumberOfSteps] = useState(0);
	const [currentStep, setCurrentStep] = useState(null);
	const context = {
		numberOfSlides: React.Children.count(children),
		numberOfSteps,
		currentStep,
		setNumberOfSteps,
		setCurrentStep,
	};
	const slides = useMemo(
		() => (
			<FadeRouter>
				{React.Children.toArray(children).map((slide, index) => {
					const Slide = () => <SlideBase>{slide}</SlideBase>;
					return <Slide key={index} path={`/${index}`} default={index === 0} />;
				})}
			</FadeRouter>
		),
		[children]
	);
	return (
		<Context.Provider value={context}>
			<Keyboard />
			{slides}
		</Context.Provider>
	);
}
