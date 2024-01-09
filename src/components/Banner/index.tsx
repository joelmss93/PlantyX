import React from 'react'
import BannerImg from '../../assets/bannerimg.jpeg'

import { Container, ImageContent, SideInformation } from './styles'
import { Button } from '../Button'
import { useTranslation } from 'react-i18next'

export const Banner: React.FC = () => {
  const { t: translate } = useTranslation()

  return (
    <Container>
      <SideInformation>
        <h1>{translate('bannerTitle')}</h1>
        <Button text={translate('bannerButton')} />
        <p>{translate('bannerFirstText')}</p>
        <span>{translate('bannerLittleText')}</span>
      </SideInformation>
      <ImageContent>
        <img src={BannerImg} alt="banner" />
      </ImageContent>
    </Container>
  )
}
