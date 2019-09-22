import { globalHistory } from '@reach/router';
import { navigate } from '@reach/router';

const getCurrentSlide = () =>
	parseInt(globalHistory.location.pathname.replace(/^\//, '')) || 0;

const nextSlide = numberOfSlides =>
	navigate(`/${Math.min(getCurrentSlide() + 1, numberOfSlides - 1)}`);

const previousSlide = () => navigate(`/${Math.max(getCurrentSlide() - 1, 0)}`);

export const next = ({
	numberOfSlides,
	numberOfSteps,
	currentStep,
	setCurrentStep,
}) => {
	if (currentStep < numberOfSteps) {
		setCurrentStep(currentStep + 1);
	} else {
		nextSlide(numberOfSlides);
		setCurrentStep(0);
	}
};

export const previous = () => {
	previousSlide();
	// setCurrentStep(numberOfSteps); // TODO
};
