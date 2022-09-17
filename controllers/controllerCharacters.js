const modelCharacters = require('../models/characters')

const getAllCharacters = async () => {
	const allCharacters = await modelCharacters.find()
	res.status(200).json(allCharacters)
}

const sendCharacters = async () => {
	const body = req.body
	const newCharacter = await new modelCharacters(body)
	const data = await newCharacter.save()
	res.status(200).json(data)
}

module.exports = { getAllCharacters, sendCharacters }
