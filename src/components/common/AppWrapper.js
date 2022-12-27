import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

export const AppWrapper = (Content, ...propsMapping) => {
	function HOC(props) {
		return (
			<>
				<Header {...props} />
				<Content {...props} />
				<div className='clearfix' />
			</>
		);
	}

	return connect(...propsMapping)(HOC);
};