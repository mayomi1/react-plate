import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.scss';
import App from './App';
// import {loadAuthToken, loadUserData} from './localStorage';
// import {setUserData,authSuccess } from './store/actions/auth';

import reducers from './store/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Hydrate the currentUserData from localStorage if it exist
//const authToken = loadAuthToken();

// if (authToken) {
//     const token = authToken;
//     store.dispatch(setUserData(token));
//     store.dispatch(authSuccess(loadUserData()));
//     //store.dispatch(refreshAuthToken());
// }

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider> , document.getElementById('root'));
