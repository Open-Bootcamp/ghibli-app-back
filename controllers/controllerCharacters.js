const modelCharacters = require('../models/characters')

const getAllCharacters = async (req, res) => {
	const allCharacters = await modelCharacters.find()
	res.status(200).json(allCharacters)
}

const getCharacter = async (req, res) => {
	const getDataCharacter = await modelCharacters.findById(req.params.id)
	res.status(200).json(getDataCharacter)
}

const sendCharacters = async (req, res) => {
	const body = req.body
	const newCharacter = await new modelCharacters(body)
	const data = await newCharacter.save()
	res.status(200).json(data)
}

module.exports = { getAllCharacters, sendCharacters, getCharacter }
