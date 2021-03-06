const AuthReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    case 'LOGIN_SUCCEESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      }
    case 'LOGIN_ERROR':
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}
export default AuthReducer
