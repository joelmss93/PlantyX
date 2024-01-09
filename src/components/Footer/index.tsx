import React, { useContext } from 'react'

import Logo from '../../assets/logo.svg'
import { Container, LinksContainer, SocialMedias } from './styles'
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import { ThemeContext } from '../../contexts/ThemeContext'
import LogoLight from '../../assets/logolight.svg'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t: translate } = useTranslation()
  const { theme } = useContext(ThemeContext)

  return (
    <Container>
      {theme === 'light' ? (
        <img src={Logo} alt="logo" />
      ) : (
        <img src={LogoLight} alt="logo" />
      )}
      <LinksContainer>
        <p>{translate('footerLinkHelp')}</p>
        <p>{translate('footerLinkContactUs')}</p>
        <p>{translate('footerLinkPrivacyTerms')}</p>
      </LinksContainer>
      <SocialMedias>
        <InstagramLogo size={24} weight="fill" />
        <FacebookLogo size={24} weight="fill" />
        <TwitterLogo size={24} weight="fill" />
      </SocialMedias>
    </Container>
  )
}
