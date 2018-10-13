import React from 'react';

//This is going to be stateless so we can define this component as a pure function rather than needing to use a class:
const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		); //Need a semicolon at the end of the return statments!
}

// By exporting as "default" you're saying that it's gunna be a member in that module which would be imported if no specific member name is provided.
export default Navigation;