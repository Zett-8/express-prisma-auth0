import { Router, Response, Request } from 'express'
import { PrismaClient } from '@prisma/client'

export const router = Router()
const prisma = new PrismaClient()

router.get('/', async (req: Request, res: Response) => {
  const cities = await prisma.city.findMany()
  res.json(cities)
})
