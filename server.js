const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
// Adicionado para permitir que minha api receba json
app.use(express.json())
// Adicionando permissão de CORS para liberar acesso público
app.use(cors())

// Iniciando o DB
// mongoose.connect('mongodb://user@password')
mongoose.connect('mongodb://localhost:27017/curso-nodejs', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Models devem ficar abaixo da conexão com o banco de dados
requireDir('./src/models')

// Use é como se fosse um coringa, ele recebe qualquer tipo de requisição:
// POST, GET, PUT, etc
app.use('/api', require('./src/routes'))

app.listen(3001)
