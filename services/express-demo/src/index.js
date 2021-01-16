const express = require('express')
const app = express()

const port = process.env.PORT || 3000

let counter = 0

app.get('/', (_, res) => {
  counter++
  res.status(200).send(`I have been visited ${counter} times.`)
})

app.listen(port, () => {
  console.info('Listening on port', port)
})
