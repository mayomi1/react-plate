/**
 * Created by mayomi on 1/12/19 by 10:33 PM.
 */
import React from 'react';
import {  Route, Switch  } from "react-router-dom";
import {
	LandingPage
} from './index';

const MainLayout = () => (
	<main>
		<header>
			some header
		</header>
		<Switch>
			<Route exact path='/' component={LandingPage}/>
		</Switch>
		<footer>
			Some footer
		</footer>
	</main>
);

export default MainLayout;
