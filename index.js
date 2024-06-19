const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req, res) => {
  res.send('Que onda perri')
})

app.listen(PORT, () => {
  console.log(`App funcionando en el puerto ${PORT}`)
})