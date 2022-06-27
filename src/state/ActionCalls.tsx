import axios from 'axios'
import { Dispatch } from 'react'

// type DispatchArray = {
//   type: string
//   payload?: string | unknown
// }

export const loginCall = async (user: any, dispatch: Dispatch<any>) => {dispatch({ type: 'LOGIN_START' })
  const PUBLIC_HEROKU = process.env.REACT_APP_HEROKU
  
  try {
    const res = await axios.post(`${PUBLIC_HEROKU}/auth/login`, user)
    dispatch({ type: 'LOGIN_SUCCEESS', payload: res.data })

  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err })
  }
}
