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

const Product = mongoose.model('Product')

// req simboliza a requisição para o servidor
// res simboliza a resposta dessa requisição
app.get('/', (req, res) => {
    Product.create({
        title: 'Meu Github',
        description: 'Aqui temos todos os meus repositórios.',
        url: 'https://github.com/lpcaldeira?tab=repositories'
    })
    return res.send('Hello Descomplica')
})

app.listen(3001)
