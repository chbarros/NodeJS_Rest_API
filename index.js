// Importa o módulo do Express Framework
const express = require('express')   

// Inicializa um objeto de aplicação Express
const app = express()

//o .use sempre vai dar match nas requisições, quer dizer, sempre vai passar por esse comando
app.use('/app',express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use((req,res,next) =>{
    console.log(new Date().toLocaleDateString(),req.method,req.url)
    next()
})

const apiV1Router = require('./routes/apiV1Router')
app.use('/app/v1', apiV1Router)

const apiV2Router = require('./routes/apiV2Router')
app.use('/app/v2', apiV2Router)

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