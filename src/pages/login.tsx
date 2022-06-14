const Login = () => {
  const style = {
    loginInput: `focus:outline-none h-[50px] rounded-[10px] mb-1`,
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
                <button className="loginButton text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  ログイン
                </button>
                  <span className="loginForget text-[15px]">
                    パスワード忘れた方へ
                  </span>
                  <button className="loginRegisterButton text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    アカウント作成
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
