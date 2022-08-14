import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type ViewportContextType = {
  isDesktop: boolean
}

const ViewportContext = createContext({} as ViewportContextType)

export const ViewportProvider = ({ children }: any) => {
  const [isDesktop, setDesktop] = useState(true)

  const updateMedia = () => setDesktop(window.innerWidth > 650)

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  useEffect(() => updateMedia())

  return (
    <ViewportContext.Provider value={{ isDesktop }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => useContext(ViewportContext)