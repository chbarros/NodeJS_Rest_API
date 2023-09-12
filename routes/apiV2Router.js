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
        .where({id: req.params.id})
        .then(produtos => {
            if (produtos.length) {
                res.status(200).json(produtos[0])
            } else {
                res.status(404).json({ mensagem: "Produto não encontrado" })
            }
        })
})

/*apiV2Router.post('/produtos', (req,res) => {
    const produto = {   
        'id': (listaProdutos.length() + 1), 
        'descricao': req.body.descricao, 
        'valor': req.body.valor, 
        'marca': req.body.marca
    }

    listaProdutos.push(produto);

    return response.json(listaProdutos);
})

apiV2Router.put('/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const idx = listaProdutos.produtos.findIndex(p => p.id === id)

    if(idx > -1){
        listaProdutos.produtos[idx].descricao = req.body.descricao
        listaProdutos.produtos[idx].valor = req.body.valor
        listaProdutos.produtos[idx].marca = req.body.marca
    
        return response.json(listaProdutos);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado'})
    }
})

apiV2Router.delete('/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const idx = listaProdutos.produtos.findIndex(p => p.id === id)

    if(idx > -1){
        listaProdutos.splice(idx, 1)
        res.status(200).json(listaProdutos)
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado'})
    }
})*/

module.exports = apiV2Router