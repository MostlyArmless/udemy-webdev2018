import React from 'react';
import './FormSubmitSuccessFailIndicator.css';

const FormSubmitSuccessFailIndicator = ({ signInFailed, failureMessage }) => {
	if (signInFailed) {
		return (
			<div className="isa_error">
				<i className="fa fa-times-circle"></i>
				{failureMessage}
			</div>
			);
	}
	else {
		return(null);
	}
}

export default FormSubmitSuccessFailIndicator;