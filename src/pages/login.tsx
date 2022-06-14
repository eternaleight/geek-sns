const Login = () => {
  const style = {
    loginInput: `focus:outline-none h-[50px] rounded-[4px] mb-1`,
  loginButton: `relative inline-flex items-center justify-center p-0.5 mb-2 mr-2  text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`,
  }
  return (
    <>
      <div className="login w-[100vw] h-[95.5vh] flex items-center justify-center">
        <div className="loginWrapper w-[70%] h-[70%] flex">
          <div className="loginleft flex-[1] flex flex-col justify-center">
            <h3 className="text-[50px] font-bold">
              Geek-SNS
            </h3>
            <span className="loginDesc flex-[0] text-[20px] flex flex-col justify-center">
              hacker, programmer, 個人開発者のためのSNS
            </span>
          </div>
          <div className="loginRight flex-[1] ml-8 text-[22px] flex flex-col justify-center">
            <div className="loginRight">
              <div className="loginBox h-[300px] p-[20px] flex flex-col justify-between bg-zinc-700 rounded-[10px] text-[16px]">
                <p className="loginMsg text-[16px] relative top-[-8px]">
                  ログインはこちらから
                </p>
                <input
                  className={style.loginInput}
                  type="text"
                  placeholder="Email"
                />
                <input
                  className={style.loginInput}
                  type="text"
                  placeholder="Password"
                />
                brilliant ✨
                <br />
                hacker community !! 💎
                <button className={style.loginButton}>
                  <span className="relative w-[100%] py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    ログイン
                  </span>
                </button>
                <span className="loginForget text-[15px]">
                  パスワード忘れた方へ
                </span>
                <button className={style.loginButton}>
                  <span className="relative w-[100%] py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    アカウント作成
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
