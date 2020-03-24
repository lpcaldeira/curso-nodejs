const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    // req.query é para GET
    // req.params é para POST/PUT/DELETE/etc
    // req.body é para pegar o corpo da requisição
    async getAll(req, res) {
        const { page = 1 } = req.query
        return res.json(await Product.paginate({}, { page, limit: 10 }))
    },

    async detail(req, res) {
        return res.json(await Product.findById(req.params.id))
    },

    async create(req, res) {
        return res.json(await Product.create(req.body))
    },

    async update(req, res) {
        // Com o new:true, vai voltar todo o registro atualizado corretamente
        return res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }))
    },

    async delete(req, res) {
        await Product.findByIdAndDelete(req.params.id)
        return res.send('O registro foi removido com sucesso!')
    }
}