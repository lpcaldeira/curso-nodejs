const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async getAll(req, res) {
        return res.json(await Product.find())
    },

    async detail(req, res){
        return res.json(await Product.findById(req.params.id))
    },

    async create(req, res) {
        return res.json(await Product.create(req.body))
    },

    async update(req, res){
        // Com o new:true, vai voltar todo o registro atualizado corretamente
        return res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {new : true}))
    },

    async delete(req, res){
        await Product.findByIdAndDelete(req.params.id)
        return res.send('O registro foi removido com sucesso!')
    }
}