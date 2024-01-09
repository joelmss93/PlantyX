import styled from 'styled-components'

interface StyledButtonProps {
  selectedTheme: 'light' | 'dark'
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  padding: 15px 29px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 40px;

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme, selectedTheme }) =>
    selectedTheme === 'light' ? theme.colors.background : theme.colors.text};
  text-align: center;
  font-family: DM Sans;
  font-size: 19.62px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: ease-in 0.3s;

  > svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secundary};
  }
`
