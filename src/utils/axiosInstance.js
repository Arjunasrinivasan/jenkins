import axios from 'axios';
import { API_BASE_URL } from './../config/index';
import store from 'store';

export const axiosCommonInstance = axios.create({
	baseURL: API_BASE_URL,
});

export const axiosCommon = axios.create({
	baseURL: API_BASE_URL,
});

export default class Client {
	static isTokenExpired() {
		let expiryTime = store.get('expiryTime');
		if (Date.now() > expiryTime - 120 * 1000 || Date.now() > expiryTime) {
			return true;
		} else {
			return false;
		}
	}

	static tokenExpires(tokenExpires) {
		let minutes = Date.now() + tokenExpires * 1000;
		console.log('min', minutes);
		return minutes;
	}

	static httpHeader(isAccessToken) {
		let date = new Date();
		let headers = {};
		headers = {
			'Content-Type': 'application/json',
			offset: date.getTimezoneOffset(),
		};
		if (isAccessToken) {
			headers = {
				'Content-Type': 'application/json',
				offset: date.getTimezoneOffset(),
				Authorization:
					typeof store.get('userSession') === 'object'
						? `${store.get('userSession').token_type} ${store.get('userSession').access_token}`
						: '',
			};
		}
		return headers;
	}

	static get(url, params, isAccessToken) {
		return new Promise(function(resolve, reject) {
			const config = {
				method: 'GET',
				url,
				params,
				headers: Client.httpHeader(isAccessToken),
			};
			axiosCommonInstance(config)
				.then(response => {
					if (response.status === 200) {
						resolve(response.data);
					} else {
						reject(response);
					}
				})
				.catch(err => {
					console.log('*******API REQUEST ERROR********');
					console.error('API REQUEST ERROR-> ', err);
					reject(false);
				});
		});
	}

	static post(url, data, isAccessToken) {
		return new Promise(function(resolve, reject) {
			const config = {
				method: 'POST',
				url,
				data,
				headers: Client.httpHeader(isAccessToken),
			};
			axiosCommonInstance(config)
				.then(response => {
					if (response.status === 200) {
						resolve(response.data);
					} else {
						reject(response);
					}
				})
				.catch(err => {
					console.log('*******API REQUEST ERROR********');
					console.error('API REQUEST ERROR-> ', err);
					reject(false);
				});
		});
	}

	static formDataPost(url, data, isAccessToken) {
		return new Promise(function(resolve, reject) {
			const config = {
				method: 'POST',
				url,
				data,
				headers: Client.httpHeader(isAccessToken, 'multipart/form-data'),
			};
			axiosCommonInstance(config)
				.then(response => {
					if (response.status === 200) {
						resolve(response.data);
					} else {
						reject(response);
					}
				})
				.catch(err => {
					console.log('*******API REQUEST ERROR********');
					console.error('API REQUEST ERROR-> ', err);
					reject(false);
				});
		});
	}

	static refresh_token(url, data) {
		return new Promise(function(resolve, reject) {
			const config = {
				method: 'POST',
				url: url,
				data: data,
			};
			axiosCommonInstance(config)
				.then(response => {
					if (response.status === 200) {
						resolve(response.data);
					} else {
						reject(response);
					}
				})
				.catch(err => {
					console.log('*******API REQUEST ERROR********');
					console.error('API REQUEST ERROR-> ', err);
					reject(false);
				});
		});
	}
}
