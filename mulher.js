const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Mileidd Yawonimi',
        imagem:'C:\Users\Mileid Lacerda\Pictures\Mi3.jpeg',
        miniBio: 'Desenvolvedora e Professora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)