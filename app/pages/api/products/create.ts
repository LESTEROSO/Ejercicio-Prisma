// src/pages/api/products/create.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { code, name, description, price } = req.body
    try {
      const product = await prisma.product.create({
        data: { code, name, description, price: parseFloat(price) },
      })
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json({ message: 'Error creating product', error })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
