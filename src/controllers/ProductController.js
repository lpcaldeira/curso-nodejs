const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async getAll(req, res) {
        // const products = await Product.find()
        return res.json(await Product.find())
    },

    async create(req, res) {
        return res.json(await Product.create(req.body))
    }
}