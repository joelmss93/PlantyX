import React, { useContext, useState } from 'react'
import { ActionsContainer, Container, LinksContainer } from './styles'
import { Gear, MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react'

import Logo from '../../assets/logo.svg'
import LogoLight from '../../assets/logolight.svg'
import { UserConfigs } from './UserConfigs'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
  const { t: translate } = useTranslation()
  const [configVisible, setConfigVisible] = useState(false)
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Container>
        {theme === 'light' ? (
          <img src={Logo} alt="logo" />
        ) : (
          <img src={LogoLight} alt="logo" />
        )}
        <LinksContainer>
          <p>{translate('linkPlants')}</p>
          <p>{translate('linkForOffices')}</p>
          <p>{translate('linkPlantsCare')}</p>
          <p>{translate('linkAbout')}</p>
        </LinksContainer>
        <ActionsContainer>
          <MagnifyingGlass />
          <UserCircle />
          <button onClick={() => setConfigVisible(true)}>
            <Gear />
          </button>
          <ShoppingCart />
        </ActionsContainer>
      </Container>
      <UserConfigs visible={configVisible} setVisible={setConfigVisible} />
    </>
  )
}
