import React, { Component } from 'react'; //Note that "React" has to be imported separately from any individually-listed other elements
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'


class App extends Component {
	//Note that we don't use the "function" keyword OR the "=>" syntax, because we're not DEFINING this function, we're OVERRIDING it.
	constructor() {
		//Call the superclass's constructor
		super()

		//Add properties
		this.state = {
			robots: [],//Empty to start with because we haven't loaded any users yet
			searchField: ''
		}
	}


	//Override the Component class's render function:
	render() {
		const { robots, searchField } = this.state;

		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		//Use "loading bar" logic to display a loading bar while we wait for the fetch() to return.
		return !robots.length ?
			<h1>Loading...</h1> :
			(
			<div className='tc'>
					{/* className='f1' is a Tachyon class */}
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
			)
	}

	componentDidMount() {
		//the window.fetch() method returns a "Promise" object which enables async programming. Whatever function you pass to the .then() method of a Promise object gets executed by callback whenever the Promise returns a value.
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users}));
	}

	//Here, we are in fact DEFINING a new function which doesn't exist in the parent class, so we use the "function" syntax (in this case, the arrow), which makes sure that "this" keyword refers to "App". If we didn't include the arrow syntax, "this" would refer to the "input" object SearchBox (since that's what triggered the event)
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}
}

export default App;