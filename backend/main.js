const express = require('express')
const cors = require('cors')
const sqlite = require('node:sqlite')

const database = new sqlite.DatabaseSync('./database.db')

const app = express()
const port = 3000

let listaDeTarefas = []

// middleware
app.use(express.json())
app.use(cors())

function createTables(){
    const query = `
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL,
            status TEXT NOT NULL
        )
    `

    database.exec(query)
}

app.get('/tarefas', (req, res) => {
    const query = `
        SELECT * FROM tarefas
    `

    const stmt = database.prepare(query);
    const result = stmt.all()
    
    res.send(result)
})

app.get('/tarefas/:id', (req, res) => {
    const id = req.params.id;

    const query = `
        SELECT * FROM tarefas WHERE id = ?
    `
    const stmt = database.prepare(query)
    const result = stmt.get(id)

    // const itemEncontrado = listaDeTarefas.find((item) => item.id == id)

    res.status(200).send(result)
})

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)

    const query = `
    DELETE FROM tarefas WHERE id = ?
`
    const stmt = database.prepare(query)
    const result = stmt.run(id)

    res.status(200).send({
        message: `Item com id ${id} removido com sucesso!`,
        result
    })
})

app.put('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id)
    const {nome, descricao, status} = req.body

    const query = `
        UPDATE tarefas SET nome = ?, descricao = ?, status = ? WHERE id = ?
    `

    const stmt = database.prepare(query)
    const result = stmt.run(nome, descricao, status, id)
   

    res.status(200).send({
        message: "Item atualizado com sucesso!",
        result
    })
})

app.post('/tarefas', (req, res) => {
    const {nome, descricao, status} = req.body
    
    const query = `
        INSERT INTO tarefas (nome, descricao, status) VALUES (?, ?, ?)
    `
    
    const stmt = database.prepare(query)
    const result = stmt.run(nome, descricao, status)

    

    // listaDeTarefas.push({
    //     id: listaDeTarefas.length + 1,
    //     nome,
    //     descricao,
    //     status
    // })

    res.status(201).send({
        message: "Tarefa criada com sucesso!",
        itemNovo: result.lastInsertRowid
    })
})

app.listen(port, () => {
    createTables()
    console.log('tá rodando')
})