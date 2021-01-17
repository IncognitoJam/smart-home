const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const traits = {}
traits['color'] = {
  states: {
    color: Number,
  },
  commands: {

  },
  errors: {
  },
}
traits['power'] = {
  attributes: {
    power: Number,
  },
}

const types = {}
types['light'] = {
  traits: ['color', 'power']
}

const devices = {}
devices[0] = {
  id: 0,
  name: 'Cameron\'s Lamp',
  type: 'light',
  variant: 'rgbw',
  state: {
    colour: [1.0, 0.6, 1.0, 1.0],
    power: false,
  },
}

app.get('/traits', (_, res) => {
  const keys = Object.keys(traits)
  res.json(keys)
})

app.get('/traits/:id', (req, res) => {
  const { id } = req.params
  const trait = traits[id]

  if (!trait) {
    res.status(404).json({
      error: 'Trait not found',
    })
    return
  }

  return res.json(trait)
})

app.get('/types', (_, res) => {
  const keys = Object.keys(types)
  res.json(keys)
})

app.get('/types/:id', (req, res) => {
  const { id } = req.params
  const type = types[id]

  if (!type) {
    res.status(404).json({
      error: 'Type not found',
    })
    return
  }

  return res.json(type)
})

app.get('/devices', (_, res) => {
  const keys = Object.keys(devices)
  res.json(keys)
})

app.get('/devices/:id', (req, res) => {
  const { id } = req.params
  const device = devices[id]

  if (!device) {
    res.status(404).json({
      error: 'Device not found',
    })
    return
  }

  res.json(device)
})

app.set('json spaces', 2)
app.listen(port, () => {
  console.info('Listening on port', port)
})
