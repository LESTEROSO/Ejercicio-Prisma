
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        code: "P001",
        name: "Product 1",
        description: "Description for product 1",
        price: 10.0
      },
      {
        code: "P002",
        name: "Product 2",
        description: "Description for product 2",
        price: 20.5
      },
      {
        code: "P003",
        name: "Product 3",
        description: "Description for product 3",
        price: 15.75
      },
      {
        code: "P004",
        name: "Product 4",
        description: "Description for product 4",
        price: 30.0
      }
    ]
  })
  console.log('Data seeded successfully')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
