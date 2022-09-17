const { getAllFilms } = require('../controllers/controllerFilms')
const express = require('express')
const routs = express.Router()
const model = require('../models/films')

routs.get('/films', getAllFilms)

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

routs.post('/films', postFilm)

module.exports = routs
