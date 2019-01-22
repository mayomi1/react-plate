/**
 * Created by mayomi on 1/22/19 by 1:54 AM.
 */
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
})
