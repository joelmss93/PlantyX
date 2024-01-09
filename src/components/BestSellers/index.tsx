import React, { RefObject, useRef } from 'react'

import {
  BestSellersHead,
  Container,
  ProductsContainer,
  ProductsRollButton,
} from './styles'
import { Button } from '../Button'
import { Product } from '../Procuct'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useTranslation } from 'react-i18next'

export const BestSellers: React.FC = () => {
  const { t: translate } = useTranslation()
  const carouselRef: RefObject<HTMLDivElement> = useRef(null)

  const handleMoveProductsList = (side: 'right' | 'left') => {
    if (
      side === 'right' &&
      carouselRef.current &&
      carouselRef.current.scrollLeft !== undefined &&
      carouselRef.current.offsetWidth !== undefined
    ) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
    } else if (
      side === 'left' &&
      carouselRef.current &&
      carouselRef.current.scrollLeft !== undefined &&
      carouselRef.current.offsetWidth !== undefined
    ) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
    }
  }

  return (
    <Container>
      <BestSellersHead>
        <p>{translate('bestSellersOurShop')}</p>
        <h3>{translate('bestSellersCallText')}</h3>
        <Button text={translate('bestSellersButton')} />
      </BestSellersHead>
      <ProductsContainer>
        <div ref={carouselRef}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Product
              key={`product-${index + 1}`}
              available
              product={{
                id: '123456',
                name: 'Aloe vera',
                price: 65.0,
                imageUrl:
                  'https://plantsworld.ae/cdn/shop/products/Aloe_Vera_-_Indoor_Plant_White_Ceramic_Pot_20_30_Size.jpg?v=1651254306&width=1214',
              }}
            />
          ))}
        </div>
        <ProductsRollButton
          onClick={() => handleMoveProductsList('left')}
          side="left"
          data-testid="button-move-products-list-left"
        >
          <CaretLeft size={32} />
        </ProductsRollButton>
        <ProductsRollButton
          onClick={() => handleMoveProductsList('right')}
          side="right"
          data-testid="button-move-products-list-right"
        >
          <CaretRight size={32} />
        </ProductsRollButton>
      </ProductsContainer>
    </Container>
  )
}
