import localstorage from 'store';
import { BASIC_USER_INFO } from './types';
import { API_BASE_URL } from '../config/index';
import Client from '../utils/axiosInstance';

export const login = code => async dispatch => {
	const params = {
		client_id: process.env.REACT_APP_ClientID,
		client_secret: process.env.REACT_APP_ClientSecret,
		code: code,
		grant_type: 'authorization_code',
		redirect_uri: `${window.location.origin}/auth/callback`,
	};
	try {
		const result = await Client.post(`${API_BASE_URL}/oauth/token`, params);
		if (result) {
			localstorage.set('userSession', result);
			const userdata = await Client.get(`${API_BASE_URL}/api/users/me`, {}, true);
			if (userdata) {
				dispatch({
					type: BASIC_USER_INFO,
					payload: userdata,
				});
			}
			return true;
		}
		return false;
	} catch (e) {
		return false;
	}
};
