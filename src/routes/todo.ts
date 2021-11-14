import { Request, Response, Router } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

export const router = Router()
const prisma = new PrismaClient()

router.get('/', async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany()
  res.json(todos)
})

router.post('/', async (req: Request, res: Response) => {
  const todo: Prisma.TodoCreateInput = req.body.data

  const result = await prisma.todo.create({ data: todo })
  res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(result)
})
