const express = require('express')

const app = express()

// req simboliza a requisição para o servidor
// res simboliza a resposta dessa requisição
app.get('/', (req, res) => {
    res.send('Hello Descomplica')
})

app.listen(3001)
