import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'; // Remember not to use capital letters in the path. You can use them in the actual classnames though
import FaceRecognition from './components/facerecognition/facerecognition';
import ImageLinkForm from './components/Forms/imagelinkform/imagelinkform';
import SignIn from './components/Forms/signin/signin';
import Register from './components/Forms/register/register';
import Rank from './components/rank/rank';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
	apiKey: '616154e6afb24f218757300e3056a931'
})

const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 800
			}
		}
	}
}

const blankUser = {
	id: '',
	name: '',
	email: '',
	entries: 0,
	joined: ''
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: '',
			regions: [],
			route: 'signin',
			isSignedIn: false,
			user: blankUser
		}
	}

	onSignIn = (data) => {
		this.setState({user: {
			id: data.id,
			name: data.name,
			email: data.email,
			entries: data.entries,
			joined: data.joined
		}})
	}



	onSignOut = (data) => {
		this.setState({user: blankUser});
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	onPictureSubmit = () => {
		this.setState({imageUrl: this.state.input})
		console.log(this.state.user)
		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then(clarifaiResponse => {
			this.setState({regions: clarifaiResponse.outputs[0].data.regions})

			if (clarifaiResponse) {
				console.log(this.state.user.id);
				fetch('http://localhost:3000/image', {
					method: 'put',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						id: this.state.user.id
					})
				})
					.then(postResponse => postResponse.json())
					.then(count => {
						// This is how we update just a single field of user object, rather than replacing the entire user object
						this.setState(Object.assign(this.state.user, {entries: count}))
					})
			}
		})
		.catch(err => console.log(err));
	}

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState({isSignedIn: false});
			route = 'signin';
		}
		else if (route === 'home') {
			this.setState({isSignedIn: true});
		}

		this.setState({route: route});
	}

	render() {

		let pageContents;
		switch(this.state.route)
		{
			case 'signin':
				pageContents = <SignIn onSignIn={this.onSignIn} onRouteChange={this.onRouteChange}/>;
				break;
			case 'register':
				pageContents = <Register onSignIn={this.onSignIn} onRouteChange={this.onRouteChange}/>;
				break;
			case 'home':
			default:
				pageContents = 
					<div>
						<Rank name={this.state.user.name} entries={this.state.user.entries}/>
						<ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}/>
						<FaceRecognition regions={this.state.regions} imageUrl={this.state.imageUrl}/>
					</div>;
				break;
		}
		return (
			<div className="App">
				<Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
				<Particles
					className='particles'
					params={particlesOptions}
					style={{
						width: '100%'
					}}
				/>
				
				{pageContents}
			</div>
		);
	}
}
export default App;
