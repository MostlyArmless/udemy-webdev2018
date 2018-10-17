import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'; // Remember not to use capital letters in the path. You can use them in the actual classnames though
import Logo from './components/logo/logo';
import FaceRecognition from './components/facerecognition/facerecognition';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
import Rank from './components/rank/rank';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import ScreenSize from './components/windowsize/windowsize';

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

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: '',
			regions: [],
			route: 'signin',
			isSignedIn: false
		}
	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	onButtonSubmit = () => {
		this.setState({imageUrl: this.state.input})

		app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
		.then(response => this.setState({regions: response.outputs[0].data.regions}))
		.catch(err => console.log(err));
	}

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState({isSignedIn: false});
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
				pageContents = <SignIn onRouteChange={this.onRouteChange}/>;
				break;
			case 'register':
				pageContents = <Register onRouteChange={this.onRouteChange}/>;
				break;
			case 'home':
			default:
				pageContents = 
					<div>
						<Logo />
						<Rank />
						<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
						<FaceRecognition regions={this.state.regions} imageUrl={this.state.imageUrl}/>
					</div>;
				break;
		}
		return (
			<div className="App" style={{width: '1000px'}}>
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
