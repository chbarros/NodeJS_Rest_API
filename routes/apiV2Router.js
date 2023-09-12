const express = require('express')
const apiV2Router = express.Router()
const knex = require('knex') (require('../knexfile').development)

apiV2Router.get('/produtos', (req,res) => {
    knex("produtos")
        .then(produtos => {
            res.status(200).json(produtos)
        })
})

apiV2Router.get('/produtos/:id',  (req, res) => {
    knex("produtos")
        .where({ id: req.params.id })
        .then(produtos => {

            if (produtos.length) {
                res.status(200).json(produtos[0])
            } else {
                res.status(404).json({ mensagem: "Produto não encontrado" })
            }

        })
})

apiV2Router.post('/produtos', (req,res) => {
    const { descricao, marca, valor } = req.body

    const novoProduto = knex("produtos").insert({ descricao, marca, valor })
    
    return res.status(200).json(novoProduto)
})

apiV2Router.put('/produtos/:id', (req,res) => {
    const { descricao, marca, valor } = req.body
    const idProduto = req.params.id

    knex("produtos")
        .where({id: idProduto})
        .then(produtos => {

            if (produtos.length) {
                
                const produtoAtualizado = knex("produtos")
                                            .where({ id: idProduto })
                                            .update({ descricao, marca, valor })
                
                return res.status(200).json(produtoAtualizado)

            } else {
                res.status(404).json({ mensagem: "Produto não encontrado" })
            }
        })
})

apiV2Router.delete('/produtos/:id', (req,res) => {
    const idProduto = req.params.id

    knex("produtos")
        .where({id: idProduto})
        .then(produtos => {

            if (produtos.length) {
                
                knex("produtos")
                    .where({ id: idProduto })
                    .delete();
                
                knex("produtos")
                    .then(produtos => {
                        res.status(200).json(produtos)
                    })

            } else {
                res.status(404).json({ mensagem: "Produto não encontrado" })
            }
        })
})

module.exports = apiV2Router