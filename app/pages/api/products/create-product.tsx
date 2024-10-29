// src/pages/create-product.tsx
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function CreateProduct() {
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, name, description, price }),
      })
      if (res.ok) {
        alert('Product created successfully!')
        router.push('/')
      } else {
        const data = await res.json()
        alert(`Error: ${data.message}`)
      }
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }

  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Code:
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}
