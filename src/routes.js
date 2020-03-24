const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

// req simboliza a requisição para o servidor
// res simboliza a resposta dessa requisição
routes.get('/products', ProductController.getAll)
routes.post('/products', ProductController.create)

module.exports = routes