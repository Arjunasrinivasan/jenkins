import { BASIC_USER_INFO } from './../action/types';

const INTIAL_STATE = {
	isSaving: false,
	info: {},
};

const login = (state = INTIAL_STATE, action) => {
	switch (action.type) {
		case BASIC_USER_INFO:
			return { ...state, info: action.payload };
		default:
			return state;
	}
};

export default login;
