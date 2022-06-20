import { createContext, ReactNode, useReducer } from 'react'
import AuthReducer from './AuthReducer'

//最初のユーザー状態を定義
const initialState = {
  user: null,
  isFetching: false,
  error: false,
  dispatch: {} 
}

//状態をグローバルに管理する
export const AuthContext = createContext(initialState)

type Props = {
  children: ReactNode
}

export const AuthContextProvider = ({ children }:Props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFethching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
