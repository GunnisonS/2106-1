const express = require('express')
const app = express()
const port = 1518

app.get('/', (req, res) => {
  res.send({username:"gunnisonsweeney"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org:${port}`)
})