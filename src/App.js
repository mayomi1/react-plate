import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './store/actions'
import MainLayout from './containers/mainLayout';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<MainLayout/>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App);
