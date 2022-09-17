const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const modelCharacters = require('../models/characters')

route.get('/characters', async (req, res) => {
	const allCharacters = await modelCharacters.find()
	res.status(200).json(allCharacters)
})

route.post('/characters', async (req, res) => {
	const body = req.body
	const newCharacter = await new modelCharacters(body)
	const data = await newCharacter.save()
	res.status(200).json(data)
})

module.exports = route
