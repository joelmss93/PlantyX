import React, { useContext } from 'react'

import { ActionButton, Container, Overlay } from './styles'
import { Moon, Sun } from 'phosphor-react'
import { ThemeContext } from '../../../contexts/ThemeContext'

import i18next from 'i18next'
import usaFlag from '../../../assets/usa_flag.svg'
import brFlag from '../../../assets/brazil_flag.svg'
import { useTranslation } from 'react-i18next'

interface UserConfigProps {
  visible: boolean
  setVisible(visible: boolean): void
}

export const UserConfigs: React.FC<UserConfigProps> = ({
  visible,
  setVisible,
}) => {
  const { t: translate } = useTranslation()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleChangeLanguage = () => {
    i18next.changeLanguage(i18next.language === 'en-US' ? 'pt-BR' : 'en-US')
  }

  return (
    <>
      {visible && (
        <Overlay visible={visible} onClick={() => setVisible(false)} />
      )}
      <Container visible={visible}>
        <h4>{translate('userConfigsTitle')}</h4>
        <ActionButton
          selectedTheme={theme}
          onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <div>
            {theme === 'light' ? <Sun size={24} /> : <Moon size={24} />}
          </div>
          <div>
            <p>
              {translate('userConfigsTheme')}
              {translate(
                `theme${theme.charAt(0).toLocaleUpperCase()}${theme.slice(
                  1,
                  theme.length,
                )}`,
              )}
            </p>
          </div>
        </ActionButton>
        <ActionButton
          onClick={handleChangeLanguage}
          selectedTheme={theme}
          blank
        >
          <div>
            {i18next.language === 'en-US' ? (
              <img src={usaFlag} alt="usa-flag" />
            ) : (
              <img src={brFlag} alt="br-flag" />
            )}
          </div>
          <div>
            <p>{translate('userConfigsLanguage')}</p>
          </div>
        </ActionButton>
      </Container>
    </>
  )
}
