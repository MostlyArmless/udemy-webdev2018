import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f4'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div className='center mw6'>
				<div className='center ph4 pv4 br3 shadow-5'>
					<input className='f4 pa2 w-60 center' type='tex' />
					<button className='w-30 grow f4 link ph3 pv2 white'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;