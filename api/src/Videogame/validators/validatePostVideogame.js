const { body } = require('express-validator')
const { validate } = require('../../helpers/validate.helper')

const validatePostVideogame = [
  body('name')
    .exists()
    .notEmpty()
    .isLowercase()
    .isLength({ min: 2, max: 50 }),
  body('slug')
    .exists()
    .notEmpty()
    .isLowercase()
    .isLength({ min: 2, max: 50 }),
  body('released')
    .exists()
    .notEmpty()
    .custom(value => {
      const regexReleased = /^\d{4}-\d{2}-\d{2}$/
      if (regexReleased.test(value)) return true
      throw new Error('invalid released videogame')
    }),
  body('background_image')
    .exists()
    .notEmpty()
    .isURL(),
  body('website')
    .exists()
    .notEmpty()
    .isURL(),
  body('rating')
    .exists()
    .notEmpty()
    .isNumeric()
    .isInt(),
  body('rating_top')
    .exists()
    .notEmpty()
    .isNumeric()
    .isInt(),
  body('movies_count')
    .exists()
    .notEmpty()
    .isNumeric()
    .isInt(),
  body('ratings_count')
    .exists()
    .notEmpty()
    .isNumeric()
    .isInt(),
  body('platforms')
    .exists()
    .notEmpty()
    .isArray()
    .custom(value => {
      const areNumbers = value.every(number => {
        return typeof number === 'number'
      })
      if (areNumbers) return true
      throw new Error('invalid platforms IDs')
    }),
  body('genres')
    .exists()
    .notEmpty()
    .isArray()
    .custom(value => {
      const areNumbers = value.every(number => {
        return typeof number === 'number'
      })
      if (areNumbers) return true
      throw new Error('invalid genres IDs')
    }),
  body('tags')
    .exists()
    .notEmpty()
    .isArray()
    .custom(value => {
      const areNumbers = value.every(number => {
        return typeof number === 'number'
      })
      if (areNumbers) return true
      throw new Error('invalid tags IDs')
    }),
  body('description_raw')
    .exists()
    .notEmpty()
    .isLength({ min: 10, max: 1600 }),
  (req, res, next) => {
    validate(req, res, next)
  }
]

module.exports = { validatePostVideogame }
