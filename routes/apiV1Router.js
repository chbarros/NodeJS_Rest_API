const express = require('express')
const apiV1Router = express.Router()

const listaProdutos = {
    produtos: [
        { id: 1, descricao: "Arroz parabolizado 5Kg", valor: 25.00, marca: "Tio João" },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans" },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé" },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps" },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé" },
    ]
} 

apiV1Router.get('/produtos', (req,res) => {
    res.status(200).json(listaProdutos)
})

apiV1Router.get('/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const idx = listaProdutos.produtos.findIndex(p => p.id === id)

    if(idx > -1){
        res.status(200).json(listaProdutos.produtos[idx])
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado'})
    }    
})

module.exports = apiV1Router