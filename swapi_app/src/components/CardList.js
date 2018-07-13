import React from 'react';
import Card from './Card'

const CardList = ({ entities }) => {

	return (

		<div>
		{entities.map((entity, i) => {
				// Without giving each Card the "key" prop, if one gets deleted react won't know
				//WHICH one was delete so it must re-render the whole DOM, whereas if you give each
				//component a key, it can just delete that one component.
				//Also, we shouldn't use the index "i" as the key, because if array items get re-sorted
				//that won't be unique anymore, so we should use 'id' as the key instead.
				console.log(entity.url)
				let urlParts = entity.url.split("/")
				console.log(urlParts)
				urlParts.pop()
				console.log(urlParts)
				let thisId = entity.url.split("/").reverse()[1]
				return(
					<Card
					key={thisId}
					id={thisId}
					name={entity.name}
					mass={entity.mass}
					/>
					)
			}
			)}

		</div>
		)
}

export default CardList;