// src/pages/index.tsx
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  code: string
  name: string
  description: string
  price: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  // Obtener la lista de productos de la API cuando se cargue la página
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      
      {/* Botón para crear un nuevo producto */}
      <Link href="/create-product">
        <button>Create New Product</button>
      </Link>

      {/* Listado de productos */}
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>Code:</strong> {product.code} - 
              <strong> Name:</strong> {product.name} - 
              <strong> Price:</strong> ${product.price}
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  )
}
