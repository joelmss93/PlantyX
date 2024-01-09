import React from 'react'
import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Container } from './styles'
import { BestSellers } from '../../components/BestSellers'
import { Reviews } from '../../components/Reviews'
import { Depoiments } from '../../components/Depoiments'
import { Footer } from '../../components/Footer'

export const Landing: React.FC = () => {
  const reviews = [
    {
      id: 'e1efasd12',
      comment: `Shop with confidance by reading customer reviews given by
      individuals who have used Bioomey. Excelient quality and
      streamlined service are both offered here.`,
      rate: 5,
    },
    {
      id: 'e1ecesd13',
      comment: `Shop with confidance by reading customer reviews given by
      individuals who have used Bioomey. Excelient quality and
      streamlined service are both offered here.`,
      rate: 3,
    },
    {
      id: 'e1efdsd08',
      comment: `Shop with confidance by reading customer reviews given by
      individuals who have used Bioomey. Excelient quality and
      streamlined service are both offered here.`,
      rate: 4,
    },
  ]

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <BestSellers />
        <section>
          <Reviews reviews={reviews} />
          <Depoiments />
        </section>
      </Container>
      <Footer />
    </>
  )
}
