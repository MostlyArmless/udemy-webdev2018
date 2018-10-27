import React from 'react';
import './register.css';
import FormSubmitSuccessFailIndicator from '../FormSubmitSuccessFailIndicator/FormSubmitSuccessFailIndicator';

class Register extends React.Component {
	constructor(props) {
		super();
		this.state = {
			email: '',
			password: '',
			name: '',
			registrationFailure: false
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	validateRegistrationFields = () => {
		// For now just ensure that they're not blank
		if (this.state.email === '' ||
			this.state.password === '' ||
			this.state.name === '') {
			return false;
		}

		return true;
	}

	onSubmitRegistration = () => {
		const regInfoIsValid = this.validateRegistrationFields();
		this.setState({registrationFailure: !regInfoIsValid});

		if (regInfoIsValid) {
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password,
					name: this.state.name
				})
			})
			.then(response => response.json())
			.then(user => {
				if (user.id) {
					this.props.onSignIn(user);
					this.props.onRouteChange('home');
				}
			})
		}
		
	}


	render() {
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
			<main className="pa4 black-80">
			<div className="measure">
			<form
			id="sign_up"
			className="ba b--transparent ph0 mh0"
			onSubmit={this.onSubmitRegistration}>
			<legend className="f4 fw6 ph0 mh0">Register</legend>
			<div className="mt3">
			<label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
			<input
			onChange={this.onNameChange}
			className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			type="text"
			name="name"
			id="name"/></div>

			<div className="mt3">
			<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			<input
			onChange={this.onEmailChange}
			className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			type="email"
			name="email-address"
			id="email-address"/></div>

			<div className="mv3">
			<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			<input
			onChange={this.onPasswordChange}
			className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
			type="password"
			name="password"
			id="password"/></div>

			</form>

			<div className="">
			<FormSubmitSuccessFailIndicator signInFailed={this.state.registrationFailure} failureMessage="Error Registering"/>
			<input
			onClick={this.onSubmitRegistration}
			className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
			type="submit"
			value="Register"/>
			</div>
			</div>
			</main>
			</article>

			);

	}
}

export default Register;