const express = require('express')

const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use('/static', express.static(__dirname + '/static'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000)
