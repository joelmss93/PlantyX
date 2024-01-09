import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './contexts/ThemeContext'
import light from './styles/theme/light'
import dark from './styles/theme/dark'
import GlobalStyles from './styles/global'
import { AppRoutes } from './routes'
import './i18n/config.ts'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
