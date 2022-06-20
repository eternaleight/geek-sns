import { createContext, ReactNode, useReducer } from 'react'
import AuthReducer from './AuthReducer'

//最初のユーザー状態を定義
const initialState = {
  user: {
    _id: '629b5b3484d1d2669e8d88f0',
    username: 'eternaleight',
    email: 'abc@gmail.com',
    password: 'abcdef',
    profilePicuture: '',
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
  dispatch: {},
}

//状態をグローバルに管理する
export const AuthContext = createContext(initialState)

type Props = {
  children: ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
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
