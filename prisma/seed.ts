import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const todoData: Prisma.TodoCreateInput[] = [
  {
    title: 'Call mom',
  },
  {
    title: 'Buy coffee beans',
  },
]

const cityData: Prisma.CityCreateInput[] = [
  {
    title: 'Tokyo',
  },
  {
    title: 'London',
  },
  {
    title: 'Paris',
  },
  {
    title: 'Berlin',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const t of todoData) {
    const todo = await prisma.todo.create({
      data: t,
    })
    console.log(`Created todo with id: ${todo.id}`)
  }

  for (const c of cityData) {
    const city = await prisma.city.create({
      data: c,
    })
    console.log(`Created city with id: ${city.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
