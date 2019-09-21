import React from 'react';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function FadeRouter(props) {
	return (
		<Location>
			{({ location }) => (
				<TransitionGroup>
					<CSSTransition key={location.key} classNames="fade" timeout={750}>
						<Router location={location}>{props.children}</Router>
					</CSSTransition>
				</TransitionGroup>
			)}
		</Location>
	);
}
