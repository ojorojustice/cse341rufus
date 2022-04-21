const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.send('Tiwadola Lux Ojo')
  })

  module.exports = routes