import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'; // Remember not to use capital letters in the path. You can use them in the actual classnames though
import Logo from './components/logo/logo';
import FaceRecognition from './components/facerecognition/facerecognition';
import ImageLinkForm from './components/imagelinkform/imagelinkform';
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

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: '',
			regions: []
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

	render() {
		return (
			<div className="App">
			<Particles
							className='particles'
							params={particlesOptions}
							style={{
								width: '100%'
							}}
			/>
			<Navigation />
			<Logo />
			<Rank />
			<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
			<FaceRecognition regions={this.state.regions} imageUrl={this.state.imageUrl}/>
			</div>
		);
	}
}

export default App;
