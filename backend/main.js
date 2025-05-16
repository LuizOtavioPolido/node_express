const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

let listaDeTarefas = []

// middleware
app.use(express.json())
app.use(cors())

app.get('/tarefas', (req, res) => {
    res.send(listaDeTarefas)
})

app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id;

    const itemEncontrado = listaDeTarefas.find((item) => item.id == id)

    res.status(200).send(itemEncontrado)
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const novaLista = listaDeTarefas.filter((item) => item.id != id)

    listaDeTarefas = novaLista

    res.status(200).send({
        message: `Item com id ${id} removido com sucesso!`
    })
})

app.put('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)
    const {nome, descricao, status} = req.body

    const indexEncontrado = listaDeTarefas.findIndex((item) => item.id == id)

    const novaTarefa = {
        id,
        nome, 
        descricao, 
        status
    }

    const itemAntigo = listaDeTarefas[indexEncontrado]

    listaDeTarefas[indexEncontrado] = novaTarefa

    res.status(200).send({
        message: "Item atualizado com sucesso!",
        itemAntigo,
        novaTarefa
    })
})

app.post('/tarefas', (req, res) => {
    const {nome, descricao, status} = req.body
    listaDeTarefas.push({
        id: listaDeTarefas.length + 1,
        nome,
        descricao,
        status
    })

    res.status(201).send({
        message: "Tarefa criada com sucesso!"
    })
})

app.listen(port, () => {
    console.log('tá rodando')
})