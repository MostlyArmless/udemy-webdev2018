import React from 'react';

//Arrow-function syntax
const Card = (props) => {
	//Option 1: Receive props as input, and destructure afterwards
	const { name, email, id } = props;
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
		<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

// const Card = ({ name, email, id }) => {
// 	//Option 2: Destructure the props argument directly in the function input
	
// 	return (
// 		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
// 		<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
// 			<div>
// 				<h2>{name}</h2>
// 				<p>{email}</p>
// 			</div>
// 		</div>
// 		);
// }

export default Card;