const express = require('express')
const routs = express.Router()
const model = require('../models/films')

const getMongo = async (req, res) => {
	const films = await model.find()
	res.status(200).json(films)
}

routs.get('/films', getMongo)

const postMongo = async (req, res) => {
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

routs.post('/films', postMongo)

module.exports = routs
