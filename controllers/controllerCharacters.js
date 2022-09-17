const modelCharacters = require('../models/characters')

// Todos 
const getAllCharacters = async (req, res) => {
	const allCharacters = await modelCharacters.find()
	res.status(200).json(allCharacters)
}

// Obtener
const getCharacter = async (req, res) => {
	const getDataCharacter = await modelCharacters.findById(req.params.id)
	res.status(200).json(getDataCharacter)
}

// Enviar 
const sendCharacters = async (req, res) => {
	const body = req.body
	const newCharacter = await new modelCharacters(body)
	const data = await newCharacter.save()
	res.status(200).json(data)
}

// Actualizar 
const updateCharacter = async (req, res) => {
	const getDataCharacter = await modelCharacters.findByIdAndUpdate(
		req.params.id,
		req.body
	)
	res.status(200).json(getDataCharacter)
}


// Eliminar 
const deleteCharacter = async (req, res) => {
	const getDataCharacter = await modelCharacters.findByIdAndDelete(
		req.params.id
	)
	res.status(200).json(getDataCharacter)
}

module.exports = {
	getAllCharacters,
	sendCharacters,
	getCharacter,
	updateCharacter,
	deleteCharacter,
}
