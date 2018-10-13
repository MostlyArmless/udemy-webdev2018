import React from 'react';
import Tilt from 'react-tilt';
import './logo.css'
import circleLogo from './logo.png'

//TODO - make the size of the Tilt dynamically adjust to the size of the logo.png
const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt pa1 br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner"><img src={circleLogo} alt='logo'></img></div>
			</Tilt>
		</div>
		);
}

export default Logo;