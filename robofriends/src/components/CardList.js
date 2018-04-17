import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {

	return (

		<div>
		{robots.map((user, i) => {
				// Without giving each Card the "key" prop, if one gets deleted react won't know WHICH one was delete so it must re-render the whole DOM, whereas if you give each component a key, it can just delete that one component.
				//Also, we shouldn't use the index "i" as the key, because if array items get re-sorted that won't be unique anymore, so we should use 'id' as the key instead.
				return(
					<Card
					key={robots[i].id}
					id={robots[i].id}
					name={robots[i].name}
					email={robots[i].email}
					/>
					)
			}
			)}

		</div>
		)
}

export default CardList;