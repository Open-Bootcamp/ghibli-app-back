const model = require('../models/films')

const getAllFilms = async (req, res) => {
	const films = await model.find()
	res.status(200).json(films)
}

module.exports = { getAllFilms }
