const { getAllFilms, postFilm } = require('../controllers/controllerFilms')
const express = require('express')
const routs = express.Router()

routs.get('/films', getAllFilms)

routs.post('/films', postFilm)

module.exports = routs
