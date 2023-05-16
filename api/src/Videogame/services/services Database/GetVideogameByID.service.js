//! Models
const { videogame, childPlatform, genre, tag } = require('../../../database/database')

//! Formatter
const { formatVideogame } = require('./formatters/formatVideogame')

//! Service
const serviceGetVideogameByIDFromDatabase = async (idVideogame) => {
  const game = await videogame.findByPk(idVideogame, {
    include: [
      {
        model: childPlatform,
        attributes: ['id', 'name', 'image_background'],
        through: { attributes: [] }
      },
      {
        model: genre,
        attributes: ['slug'],
        through: { attributes: [] }
      },
      {
        model: tag,
        attributes: ['slug'],
        through: { attributes: [] }
      }
    ]
  })
  const newFormatVideogame = formatVideogame(game)
  return newFormatVideogame
}

module.exports = {
  serviceGetVideogameByIDFromDatabase
}
