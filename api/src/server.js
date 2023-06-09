//! Express and Middlewares
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// const { SERVER_CONST } = require('../consts')

//! Routes Modules
const VideogameRoutes = require('./Videogame/routes/Videogame.routes')
const GenreRoutes = require('./Genre/routes/Genre.routes')
const ParentPlatformRoutes = require('./Platform/routes/ParentPlatform.routes')
const ChildPlatformRoutes = require('./Platform/routes/ChildPlatform.routes')
const TagRoutes = require('./Tags/routes/Tag.routes')

//! Instance of Express
const server = express()

//! CORS Configuration
// server.use((req, res, next) => {
//   res.header('Acces-Control-Allow-Origin', '*')
//   res.header('Acces-Control-Allow-Credentials', 'true')
//   res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   res.header('Acces-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//   next()
// })

//! Middlewares
server.use(cors())
server.use(express.json())
server.use(morgan('dev'))

//! Middlewares for the Endpoints
server.use('/videogames', VideogameRoutes)

server.use('/genres', GenreRoutes)

server.use('/parent-platforms', ParentPlatformRoutes)

server.use('/child-platforms', ChildPlatformRoutes)

server.use('/tags', TagRoutes)

//! Error Middleware
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
server.use(bodyParser.json({ limit: '50mb' }))
server.use(methodOverride())
server.use((err, req, res, next) => {
  const status = err.status || 500
  const message = 'Bad Request, try to acces to non-existend endpoint'
  console.log(err)
  res.status(status).send(message)
})

module.exports = server
