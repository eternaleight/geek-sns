import React, { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import { SizeContext } from '../utils/size-observer'
import { LoginContext } from '../utils/login-observer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const { innerWidth } = useContext(SizeContext)
  const { scrollY } = useContext(ScrollContext)
  const { loginState, setLoginState } = useContext(LoginContext)
  const username = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)
  const passwordConfirmation = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const PUBLIC_HEROKU = process.env.REACT_APP_HEROKU

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // パスワードと確認用パスワードが合っているかどうかを確認
    if (password.current?.value !== passwordConfirmation.current?.value) {
      passwordConfirmation.current?.setCustomValidity('パスワードが違います')
    } else {
      try {
        //registerApiを叩く
        const user = {
          username: username.current?.value,
          email: email.current?.value,
          password: password.current?.value,
        }
        await axios.post(`${PUBLIC_HEROKU}/auth/register`, user)
        navigate('/login')
      } catch (err) {
        console.log(err)
      }
    }
    // console.log(username.current?.value)
    // console.log(email.current?.value)
    // console.log(password.current?.value)
    // console.log(passwordConfirmation.current?.value)
  }

  const login = () => {
    if (innerWidth < 968) {
      scrollY < 160 ? window.scrollTo(0, 660) : null //eslint-disable-line
    } else {
      scrollY < 160 ? window.scrollTo(0, 960) : null //eslint-disable-line
    }
    setLoginState(!loginState)
  }

  const style = {
    loginInput: `focus:outline-none h-[50px] w-full rounded-[4px] mb-[6px]`,
    loginButton: `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`,
    loginButton2: `text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`,
  }

  return (
    <>
      <div
        style={{
          backgroundColor: `#1d1f26`,
        }}
        className={
          loginState
            ? 'z-[100] top-0 login w-[100vw] mx-auto h-[100vh] flex items-center justify-center'
            : 'sticky z-[100] top-0 login w-[100vw] mx-auto h-[100vh] flex items-center justify-center'
        }
      >
        <div
          className={
            innerWidth < 968
              ? 'loginWrapper w-[clamp(0,70%,400px)] h-[70%] flex flex-col mb-28'
              : 'loginWrapper  w-[800px] h-[70%] flex'
          }
        >
          <div
            className={
              innerWidth < 968
                ? 'loginleft flex-[1] flex flex-col justify-center mr-0'
                : 'loginleft flex-[1] flex flex-col justify-center mr-6'
            }
          >
            <h3
              onClick={() =>
                innerWidth < 968
                  ? window.scrollTo(0, 660)
                  : window.scrollTo(0, 960)
              }
              className="text-[50px] font-bold cursor-pointer"
            >
              Geek-SNS
            </h3>
            <span className="loginDesc flex-[0] text-[20px] flex flex-col justify-center">
              hacker, programmer, 個人開発者のSNS
            </span>
          </div>
          <div className="loginRight flex-[1]  text-[22px] flex flex-col justify-center">
            <div className="loginRight">
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="loginBox h-[400px] p-[20px] flex flex-col justify-between bg-zinc-700 rounded-[10px] text-[16px]"
              >
                <p className="loginMsg text-[16px] relative top-[-8px]">
                  新規登録はこちらから
                </p>
                <input
                  ref={username}
                  className={style.loginInput}
                  type="text"
                  placeholder=" Username"
                  required
                />
                <input
                  ref={email}
                  className={style.loginInput}
                  type="email"
                  placeholder=" Email"
                  required
                />
                <input
                  ref={password}
                  className={style.loginInput}
                  type="password"
                  placeholder=" Password"
                  minLength={6}
                  required
                />
                <input
                  ref={passwordConfirmation}
                  className={style.loginInput}
                  type="password"
                  placeholder=" Confirmation password"
                  minLength={6}
                  required
                />
                brilliant ✨
                <br />
                hacker community !! 💎
                {innerWidth < 968 ? (
                  <>
                    <button
                      type="submit"
                      onClick={() => login()}
                      className={style.loginButton}
                    >
                      <span className="relative w-[100%] py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        新規登録/サインアップ
                      </span>
                    </button>
                    <span className="loginForget text-[15px]">
                      ログインの方はこちら
                    </span>
                    <button
                      className={style.loginButton}
                      onClick={() => navigate('/login')}
                    >
                      <span className="relative w-[100%] py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        ログイン
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      onClick={() => login()}
                      className={style.loginButton2}
                    >
                      新規登録/サインアップ
                    </button>
                    <span className="loginForget text-[15px]">
                      ログインの方はこちら
                    </span>
                    <button
                      onClick={() => navigate('/login')}
                      className={style.loginButton2}
                    >
                      ログイン
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register
