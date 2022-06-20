//ユーザー入力に応じたアクションの設定
export const Loginstart = () => ({
  type: 'LOGIN_START',
})

export const LoginSuccess = (user: string) => ({
  type: 'LOGIN_SUCCEESS',
  payload: user
})

export const LoginError = (error: string) => ({
  type: 'LOGIN_ERROR',
  payload: error
})
