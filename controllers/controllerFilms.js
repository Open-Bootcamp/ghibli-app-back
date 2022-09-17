const model = require('../models/films')

const getAllFilms = async (req, res) => {
	const films = await model.find()
	res.status(200).json(films)
}

const postFilm = async (req, res) => {
	const films = new model(req.body)
	try {
		const guardado = await films.save()
		res.status(200).json(guardado)
	} catch (error) {
		res.status(500).json({
			error: error.mensaje,
		})
	}
}

module.exports = { getAllFilms, postFilm }
