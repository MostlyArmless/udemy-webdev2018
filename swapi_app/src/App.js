import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      ships: [],
      people: []
    }
  }

  render() {

    const { ships, people } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SWAPI Test App</h1>
        </header>
        <p className="App-intro">
          Star Wars API testing
        </p>

        <CardList entities={this.state.people} />
      </div>
    );
  }

  componentDidMount() {
    const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3'
    ]

    Promise.all(urls.map( url =>
        fetch(url).then(resp => resp.json()))).then(array => {
        this.setState({people: array})
      }).catch("Couldn't get the people");
  }
}

export default App;
