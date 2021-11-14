import express, { Request, Response } from 'express'
import { router as todoRouter } from './routes/todo'

export const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.use('/todo', todoRouter)
