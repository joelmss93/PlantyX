import React from 'react'

import { Container } from './styles'

export type Product = {
  id: string
  name: string
  price: number
  imageUrl: string
}

interface ProductProps {
  product: Product
  available: boolean
}

export const Product: React.FC<ProductProps> = ({ product, available }) => {
  return (
    <Container available={available}>
      <img src={product.imageUrl} alt="product-image" />
      <div>
        <p>{product.name}</p>
        <p>{product.price.toFixed(2)}</p>
      </div>
    </Container>
  )
}
