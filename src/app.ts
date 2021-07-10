import { connection } from './lib/database/mongoConnect'

import express from 'express'
import colors from 'colors'

import apiRouter from './api'
import { environment } from './environment'

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

const { PORT } = environment

connection.then(() => {
  app.listen(PORT,() => {

    // eslint-disable-next-line no-console
    console.log(
      colors.rainbow('------------------------------------------'),
      colors.black.bgRed(`\nServer started on ${PORT} to PRODUCTION=${environment.PRODUCTION}`),
      colors.rainbow('\n------------------------------------------'),
    )
  })
},
)
