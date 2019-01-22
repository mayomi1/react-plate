/**
 * Created by mayomi on 1/12/19 by 10:31 PM.
 */
export const loadAuthToken = () => {
	return window.localStorage.getItem('currentUserData');
};

export const loadUserData = () => {
	return window.localStorage.getItem('userData');
};

export const saveUserData = userData => {
	try {
		console.log('token to save', userData);
		window.localStorage.setItem('currentUserData', JSON.stringify(userData));
	} catch (e) {}
};


export const clearAuthToken = () => {
	try {
		window.localStorage.removeItem('currentUserData');
		window.localStorage.removeItem('userData');
	} catch (e) {}
};
