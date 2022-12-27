import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';
describe('Login component tests', () => {
	const wrapper = shallow(<Login />);
	it('should have a btn component', () => {
		//There should be only one button
		expect(wrapper.find('button')).toHaveLength(1);
		//Button should have matching text
		expect(wrapper.find('button').text()).toEqual('Log in with ProctorU');

		const loginButton = wrapper.find('button');
		loginButton.simulate('click');
	});
});
