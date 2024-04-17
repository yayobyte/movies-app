import React, { createContext } from 'react'

export const theme = {}

export const ThemeContext = createContext({theme})

export const ThemeProvider = ({ children }: { children : React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
