import React from 'react';
import './SignInSuccessFailIndicator.css';

const SignInSuccessFailIndicator = ({ signInFailed }) => {

	if (signInFailed) {
		return (
			<div className="isa_error">
				{/*<i class="fa fa-times-circle"></i>*/}
				Error logging in
			</div>
			);
	}
	else {
		return(null);
	}
}

export default SignInSuccessFailIndicator;