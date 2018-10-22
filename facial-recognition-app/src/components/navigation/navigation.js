import React from 'react';
import Logo from '../logo/logo';

//This is going to be stateless so we can define this component as a pure function rather than needing to use a class:



const Navigation = ({ onRouteChange, isSignedIn }) => {
	
	let navLinks;
	if (isSignedIn) {
		navLinks = <p className='f6 f5-ns dib mr3 mr4-ns link dim black underline pointer' onClick={() => onRouteChange('signout')}> Sign Out</p>;
	}
	else {
		navLinks = 
		<div className="cf ph2-ns">
			<p className='f6 f5-ns dib mr3 mr4-ns link dim black underline pointer' onClick={() => onRouteChange('signin')}> Sign In</p>
			<p className='f6 f5-ns dib mr3 mr4-ns link dim black underline pointer' onClick={() => onRouteChange('register')}> Register</p>
		</div>;
	}

	return (
		<nav className='dt w-100 border-box pv3' style={{display: 'flex', justifyContent: 'flex-end'}}>
			<Logo className="dtc v-mid mid-gray link dim w-10" />
			<div className="dtc v-mid w-90 tr">
		    	{navLinks}
		  	</div>
		</nav>
		);
}

// By exporting as "default" you're saying that it's gunna be a member in that module which would be imported if no specific member name is provided.
export default Navigation;