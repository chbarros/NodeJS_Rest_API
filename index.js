// Importa o módulo do Express Framework
const express = require('express')

const listaProdutos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João" },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans" },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé" },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps" },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé" },
    ]
}    

// Inicializa um objeto de aplicação Express
const app = express()

//o .use sempre vai dar match nas requisições, quer dizer, sempre vai passar por esse comando
app.use('/app',express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use((req,res,next) =>{
    console.log(new Date().toLocaleDateString(),req.method,req.url)
    next()
})

app.get('/app/produtos',(req,res) => {
    res.status(200).json(listaProdutos)
})

app.get('/',  (req, res) => {
    res.send(`
            <form method="POST">
                <input type="text" name="nome">
                <input type="submit" value="Ok">
            </form>`
            )
})

app.post('/', (req, res) => {
    res.send(`Olá ${req.body.nome}`)
})

app.use((req,res) => {
    res.status(404).send('Pagina não encontrada')
})

// Inicializa o servidor HTTP na porta 3000
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000')
})