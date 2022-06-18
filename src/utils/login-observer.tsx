import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { ScrollContext } from '../utils/scroll-observer'

type LoginBool = {
  loginState: boolean
  setLoginState: Dispatch<SetStateAction<boolean>>
}

export const LoginContext = React.createContext<LoginBool>({
  loginState: false,
  setLoginState: undefined as never,
})

type Props = {
  children: ReactNode
}

const LoginObserver: React.FC<Props> = ({ children }) => {
  const { scrollY } = useContext(ScrollContext)
  const [loginState, setLoginState] = useState<boolean>(false)

  useEffect(() => {
    if (scrollY < 10) {
      if (loginState === true) {
        setLoginState(!loginState)
      }
      null //eslint-disable-line
    }
    null //eslint-disable-line
  }, [scrollY])

  return (
    <LoginContext.Provider value={{ loginState, setLoginState }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginObserver
