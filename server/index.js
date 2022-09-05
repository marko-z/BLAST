const express = require('express')

const app = express()
app.use('/static', express.static('static'))
const port = 5001

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})