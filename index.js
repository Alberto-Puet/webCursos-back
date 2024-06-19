const dotenv = require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Que onda perri')
})

app.listen(PORT, () => {
  console.log(`App funcionando en el puerto ${PORT}`)
})