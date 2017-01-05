import config from './config'
import api from './api'

const seneca = require('seneca')()

seneca.use(api)
seneca.listen({type: config.type, port: config.port})
