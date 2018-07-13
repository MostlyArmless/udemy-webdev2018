import React from 'react'


const Card = (props) => {
	//Option 1: Receive props as input, and destructure afterwards
	const { id, name, mass } = props;
	

// <img alt='Person' src={wikiImage} />
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<p>Name: {name}</p>
			<div>Mass: {mass} kg</div>
		</div>
		);
}

export default Card;