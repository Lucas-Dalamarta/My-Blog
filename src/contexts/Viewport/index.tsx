import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

enum EViewport {
  Small = 'small',
  Big = 'big',
  Bigger = 'bigger',
}

type ViewportContextType = { viewPort: EViewport }

const ViewportContext = createContext({} as ViewportContextType)

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [viewPort, setDesktop] = useState(EViewport.Small)

  const updateMedia = () => setDesktop(
    window.innerWidth > 1400 
      ? EViewport.Bigger 
      : window.innerWidth > 600 
        ? EViewport.Big 
        : EViewport.Small
    )

  useEffect(() => {
    console.log({ viewPort })
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  useEffect(() => updateMedia())

  return (
    <ViewportContext.Provider value={{ viewPort }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => useContext(ViewportContext)