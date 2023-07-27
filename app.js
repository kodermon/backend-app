const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("<h2>Simpe node app</h2>")
})

app.get('/api/msg', (req, res) => {
    res.json({ 'msg': 'Hello from backend' })
})

app.listen('80')