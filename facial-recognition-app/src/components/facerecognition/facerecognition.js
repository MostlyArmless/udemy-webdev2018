import React from 'react';
import './facerecognition.css';

// https://thumbs.dreamstime.com/z/green-bush-6168774.jpg
// http://blogs.discovermagazine.com/neuroskeptic/files/2018/04/tom_cruise_lol.png
function FaceRecognition ({ imageUrl, regions }) {
	//Build the list of bounding boxes outisde of the component's return statement.
	

	const boundingBoxes = regions.map((region) => {
		const image = document.getElementById('input_image');
		const totalWidth = Number(image.width);
		const totalHeight = Number(image.height);
		
		return(<div
			key={region.id}
			className='bounding-box'
			style={{top: region.region_info.bounding_box.top_row * totalHeight,
				right: totalWidth - (region.region_info.bounding_box.right_col * totalWidth),
				bottom: totalHeight - (region.region_info.bounding_box.bottom_row * totalHeight),
				left: region.region_info.bounding_box.left_col * totalWidth}}>
		</div>);
	});

	//As far as I can tell, the component's return statement must consist of only HTML and JSX.
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='input_image' alt='' src={imageUrl} width='500px' height='auto'/>
				{boundingBoxes}
			</div>
		</div>
		);
}

export default FaceRecognition;