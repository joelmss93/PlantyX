import React, { useContext } from 'react'

import { StyledButton } from './styles'
import { ThemeContext } from '../../contexts/ThemeContext'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ReactElement
}

export const Button: React.FC<ButtonProps> = ({ text, icon, ...rest }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <StyledButton selectedTheme={theme} {...rest}>
      {icon}
      <p>{text}</p>
    </StyledButton>
  )
}
