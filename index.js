const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.text());
var bodyParser = require('body-parser');
app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/comment', (req, res) => {
    console.log(req.body)
    res.status(201).send(req.body)
  })

app.get('/welcome', (req, res) => {
    res.send('Welcome to the server side!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})