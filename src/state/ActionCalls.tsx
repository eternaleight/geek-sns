import axios from 'axios'
import { Dispatch } from 'react'

type DispatchArray = {
  type: string
  payload?: string | unknown
}

export const loginCall = async (user: any, dispatch: any) => {
  dispatch({ type: 'LOGIN_START' })
  try {
    const res = await axios.post('/auth/login', user)
    dispatch({ type: 'LOGIN_SUCCEESS', payload: res.data })
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err })
  }
}
