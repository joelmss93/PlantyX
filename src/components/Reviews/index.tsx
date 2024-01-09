import React, { useState } from 'react'

import { Container, ShopReview } from './styles'
import { Star } from 'phosphor-react'

interface ReviewProps {
  reviews: {
    id: string
    comment: string
    rate: number
  }[]
}

export const Reviews: React.FC<ReviewProps> = ({ reviews }) => {
  const [selector, setSelector] = useState(1)

  const handleChangeReview = (action: 'next' | 'back') => {
    action === 'next' &&
      setSelector((oldValue) => (oldValue < reviews.length ? oldValue + 1 : 1))

    action === 'back' &&
      setSelector((oldValue) => (oldValue > 1 ? oldValue - 1 : 1))
  }

  return (
    <Container>
      <ShopReview>
        <h5>REVIEWS</h5>
        {reviews
          .filter((_, index) => index === selector)
          .map((review) => (
            <div key={review.id}>
              <p>{review.comment}</p>
              <div>
                <div>
                  {Array.from({ length: review.rate }).map((_, index) => (
                    <Star
                      size={20}
                      key={`star-rate-${index + 1}`}
                      weight="fill"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rate }).map((_, index) => (
                    <Star
                      size={20}
                      key={`start-unrated-${index + 1}`}
                      color="#CECECE"
                    />
                  ))}
                </div>
                <span>{review.rate}/5</span>
              </div>
            </div>
          ))}
        <span>{reviews.length} reviews</span>
      </ShopReview>
    </Container>
  )
}
