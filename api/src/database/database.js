//! Envoironment variables and Sequelize module
require('dotenv').config()
const { Sequelize } = require('sequelize')

//! Connection variables
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

//! .define() functions
const defineModelVideogame = require('../Videogame/models/Videogame.model')
const defineModelGenre = require('../Genre/models/Genre.model')
const defineModelParentPlatform = require('../Platform/models/ParentPlatform.model')
const defineModelChildPlatform = require('../Platform/models/ChildPlatform.model')
const defineModelTag = require('../Tags/models/Tag.model')

//! Database connection
const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false,
  native: false
})

//! Creation of models/tables
defineModelVideogame(database)
defineModelGenre(database)
defineModelParentPlatform(database)
defineModelChildPlatform(database)
defineModelTag(database)

//! import of models
const { videogame, genre, childPlatform, tag } = database.models

//! Establishment of relationships

//! Many-To-Many
videogame.belongsToMany(genre, { through: 'videogame-genre' })
genre.belongsToMany(videogame, { through: 'videogame-genre' })

//! Many-To-Many
videogame.belongsToMany(childPlatform, { through: 'videogame-childPlatform' })
childPlatform.belongsToMany(videogame, { through: 'videogame-childPlatform' })

//! Many-To-Many
videogame.belongsToMany(tag, { through: 'game-tag' })
tag.belongsToMany(videogame, { through: 'game-tag' })

module.exports = {
  database,
  ...database.models
}
