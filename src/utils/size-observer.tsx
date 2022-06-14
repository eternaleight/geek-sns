import React, {
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react'

type SizeValue = {
  innerWidth: number
}

export const SizeContext = React.createContext<SizeValue>({
  innerWidth: 0,
})

type Props = {
  children: ReactNode
}
const SizeObserver: React.FC<Props> = ({ children }) => {
  const [innerWidth, setInnnerWidth] = useState<number>(
    window.innerWidth < 768 ? 767 : 769
  )

  const windowWidth = useCallback(() => {
    setInnnerWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', windowWidth, {
      passive: true,
    })
    return () =>
      window.removeEventListener('resize', windowWidth)
  }, [windowWidth])

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  )
}

export default SizeObserver
