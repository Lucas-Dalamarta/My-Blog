import { createContext, useContext, useEffect, useState } from "react"
import { COLORS } from "../../themes"

export const ThemeContext = createContext({} as any)

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState<any>('dark')
  useEffect(() => {
    const getPreferredColorMode = () => {
      const persistedColorPreference = window.localStorage.getItem('color-mode')
      const hasPersistedPreference = typeof persistedColorPreference === 'string'
      // If the user has explicitly chosen light or dark,
      // let's use it. Otherwise, this value will be null.
      if (hasPersistedPreference) return persistedColorPreference
      // If they haven't been explicit, let's check the media
      // query
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const hasMediaQueryPreference = typeof mql.matches === 'boolean'
      if (hasMediaQueryPreference) return mql.matches ? 'dark' : 'light'
      // If they are using a browser/OS that doesn't support
      // color themes, let's default to 'light'.
      return 'light'
    }
    rawSetColorMode(getPreferredColorMode())
  }, [])

  const setColorMode = (value) => {
    rawSetColorMode(value)
    window.localStorage.setItem('color-mode', value)

    const root = window.document.documentElement;
    Object.entries(COLORS[value])
      .forEach(([name, color]) =>
        root.style.setProperty(`--color-${name}`, `${color}`)
      )
  };

  const handleThemeChange = () => {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  }

  return (
    <ThemeContext.Provider value={{ colorMode, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)