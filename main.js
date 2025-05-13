const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Oi tudo bao')
})

app.listen(port, () => {
    console.log('tá rodando')
})