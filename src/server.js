const helpers = require('./helpers')
const express = require('express')
const app = express()

const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/payments', (req, res) => {
  console.log('send response: payments')
  res.json(helpers.payments)
})

app.get('/news', (req, res) => {
  console.log('send redponse: news')
  res.json(helpers.news)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))  