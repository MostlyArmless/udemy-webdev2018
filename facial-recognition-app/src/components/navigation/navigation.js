import React from 'react';

//This is going to be stateless so we can define this component as a pure function rather than needing to use a class:
const Navigation = ({ onRouteChange, isSignedIn }) => {
	
	let navContents;
	if (isSignedIn) {
		navContents = <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}> Sign Out</p>;
	}
	else {
		navContents = 
		<div>
			<p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}> Sign In</p>
			<p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}> Register</p>
		</div>;
	}

	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			{navContents}
		</nav>
		);
}

// By exporting as "default" you're saying that it's gunna be a member in that module which would be imported if no specific member name is provided.
export default Navigation;