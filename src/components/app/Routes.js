import React from 'react';
import { Router } from '@reach/router';
import Homepage from './Homepage';
import Checkout from './CheckoutContainer';
import { getUrl } from '../../urls';

const Routes = () => (
	<Router basepath={getUrl()}>
		<Homepage path="/" default />
		<Checkout path="/checkout/:dogId" />
	</Router>
);

export default Routes;
