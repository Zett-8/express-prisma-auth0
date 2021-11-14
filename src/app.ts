import express, { Request, Response } from 'express'
import cors from 'cors'

import { jwtCheck } from './utils/jwtCheck'
import { router as todoRouter } from './routes/todo'

export const app = express()

app.use(cors({ credentials: true }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.use('/todo', jwtCheck, todoRouter)
