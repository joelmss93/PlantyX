import React, { ReactElement, createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: (theme: Theme) => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeControlProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('Theme')

    storedTheme === 'dark' && setTheme(storedTheme)
  }, [])

  const toggleTheme = () => {
    setTheme((oldValue) => (oldValue === 'light' ? 'dark' : 'light'))
    localStorage.setItem('Theme', theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
