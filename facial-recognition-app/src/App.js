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
      dominantColor:''
    }
  }
// https://thumbs.dreamstime.com/z/green-bush-6168774.jpg
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.COLOR_MODEL,
      this.state.input).then(

      function(response) {
        console.log(response);
        var colorName0 = response.outputs[0].data.colors[0].w3c.name;
        var colorName1 = response.outputs[1].data.colors[1].w3c.name;
        var colorName2 = response.outputs[2].data.colors[2].w3c.name;
        console.log(colorName0)
        console.log(colorName1)
        console.log(colorName2)
      },
      function(err) {
        console.log('AWW SHIT IT BROKE')
        console.log(err)
      }
    );
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
      <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
