const express = require('express')
const app = express()
const PORT = 3333

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => {
  console.log('server is running on :3333')
})
