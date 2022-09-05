const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
app.use('/static', express.static('static'))
const multer = require('multer')
const upload = multer({ dest: 'static/'})

const port = 5001


app.get('/getFilenames', (req, res) => {
    const names = fs.readdirSync(path.resolve(__dirname, 'static'))
    res.json(names)
})
app.post('/uploadFile', upload.single('image'), (req, res) => {
    console.log('/uploadFile')
    console.log(req.file)
    res.status(200).send()
})
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.listen(port, () => {
    console.log(`Listening on ${port}`)
})