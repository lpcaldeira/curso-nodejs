const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

// req simboliza a requisição para o servidor
// res simboliza a resposta dessa requisição
routes.get('/products', ProductController.getAll)
routes.get('/products/:id', ProductController.detail)
routes.post('/products', ProductController.create)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)

module.exports = routes