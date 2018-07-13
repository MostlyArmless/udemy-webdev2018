import React from 'react';

//Simple component with no state, so it can just be a function
const Navigation = () => {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p className='f3 link dim black underline ph3 pointer'>Sign Out</p>
		</nav>
	);
}

export default Navigation;