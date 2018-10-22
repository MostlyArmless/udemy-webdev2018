import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'This App will detect faces in your pictures. Paste a URL below .'}
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shawdow-5'>
					<input className='f4 pa2 w-70 center'
							type='text'
							onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
					onClick={onPictureSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;