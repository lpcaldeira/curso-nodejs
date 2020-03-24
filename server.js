const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()

// Iniciando o DB
// mongoose.connect('mongodb://user@password')
mongoose.connect('mongodb://localhost:27017/curso-nodejs', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Models devem ficar abaixo da conexão com o banco de dados
requireDir('./src/models')

// const Product = mongoose.model('Product')

// Use é como se fosse um coringa, ele recebe qualquer tipo de requisição:
// POST, GET, PUT, etc
app.use('/api', require('./src/routes'))

app.listen(3001)
