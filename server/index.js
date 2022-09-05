const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
app.use('/static', express.static('static'))
const port = 5001

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/getFilenames', (req, res) => {
    const names = fs.readdirSync(path.resolve(__dirname, 'static'))
    res.json(names)
})
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})