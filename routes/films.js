const {
	getAllFilms,
	postFilm,
	getFilm,
} = require('../controllers/controllerFilms')
const express = require('express')
const routs = express.Router()
const mongoose = require('mongoose')
const model = require('../models/films')

routs.get('/films', getAllFilms)
routs.get('/films/:id', getFilm)
routs.post('/films', postFilm)

module.exports = routs
