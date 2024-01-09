import React from 'react'

import { ButtonsContainer, Container } from './styles'
import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

export const Depoiments: React.FC = () => {
  return (
    <Container>
      <p>
        {`We adore all our friends atBloomey, especially the beauties who have
        come to live with us! Great advice when needed, beautifully and safely
        packaged. Highly recommend, it's just the best place for healthy plants
        and great value!`}
      </p>
      <span>Pamela S.</span>
      <span>Lake Forest, CA</span>
      <ButtonsContainer>
        <button>
          <ArrowCircleLeft size={36} />
        </button>
        <button>
          <ArrowCircleRight size={36} />
        </button>
      </ButtonsContainer>
    </Container>
  )
}
