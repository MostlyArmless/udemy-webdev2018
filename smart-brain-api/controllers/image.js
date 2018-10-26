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
	handleImagePut
}