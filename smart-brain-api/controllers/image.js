const Clarifai = require('clarifai');

const app = new Clarifai.App({
	apiKey: '616154e6afb24f218757300e3056a931'
})

const handleClarifaiApiCall = (req, res) => {
	app.models
	.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data => {
		res.json(data);
	})
	.catch(err => res.status(400).json('Clarifai API error.'))
}

const handleImagePut = (req, res, db) => {
	const { id } = req.body;
	// Update the user's "count" field
	db('users').where('id','=',id)
	.increment('entries',1)
	.returning('entries')
	.then(entries => {
		res.json(entries);
	})
	.catch(err => res.status(400).json('Unable to get entries.'));
}

module.exports = {
	handleImagePut, handleClarifaiApiCall
}