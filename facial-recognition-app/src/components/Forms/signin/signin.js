import React from 'react';
import './signin.css';
import FormSubmitSuccessFailIndicator from '../FormSubmitSuccessFailIndicator/FormSubmitSuccessFailIndicator';

class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			signInFailed: false
		}
	}

	clearInputFields = (event) => {
		this.setState({
			signInEmail: '',
			signInPassword: ''
		})
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then(response => {
				if (response.ok) {
					// Sign in succeeded, change route to home
					this.setState({signInFailed: false});
					return response.json()
						.then(user => {
							this.props.onSignIn(user);
							this.props.onRouteChange('home')
					});
				}
				else {
					// Sign in failed, clear the sign in fields
					this.setState({signInFailed: true});
					this.clearInputFields();
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
	
	render()
	{
		const { onRouteChange } = this.props;

		return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
			<main className="pa4 black-80">
				<div className="measure">
					<form
						id="sign_in"
						className="ba b--transparent ph0 mh0"
						onSubmit={() => this.onSubmitSignIn()}>
						<legend className="f4 fw6 ph0 mh0">Sign In</legend>
						<div className="mt3">
							<label
								className="db fw6 lh-copy f6"
								htmlFor="email-address">Email</label>
							<input
								onChange={this.onEmailChange}
								value={this.state.signInEmail}
								className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								type="email"
								name="email-address"
								id="email-address"/>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
							<input
								onChange={this.onPasswordChange}
								value={this.state.signInPassword}
								className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								type="password"
								name="password"
								id="password"/>
						</div>
					</form>
					
					<div>
						<FormSubmitSuccessFailIndicator signInFailed={this.state.signInFailed} failureMessage="Login Error"/>
						<input
							onClick={() => this.onSubmitSignIn()}
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
							type="submit"
							value="Sign in"/>
					</div>
					
					<div className="lh-copy mt3">
				  		<p
							onClick={() => onRouteChange('register')}
							className="f6 link dim black db pointer underline">
							Register</p>
					</div>
				</div>
			</main>
		</article>

		);
	}
	
}

export default SignIn;