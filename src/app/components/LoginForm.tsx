const LoginForm = () => {
  return (
    <div className="flex justify-center items-center xl:w-6/12 z-10 text-white w-full">
      <div className="flex md:max-w-lg max-w-3xs">
        <div className="flex flex-col gap-5 md:gap-13">
          <div className="flex justify-end items-end gap-1">
            <h1 className="md:text-5xl text-4xl">Faça seu login</h1>
          </div>
          <form action="" className="flex flex-col gap-2.5 md:gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-400" htmlFor="email">
                Email
              </label>
              <div className="has-focus:duration-200 has-focus:p-0.5 flex rounded-xl has-focus:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
                <input
                  className="pl-2 rounded-xl bg-neutral-900 py-2 w-full focus:outline-none"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-400" htmlFor="password">
                Senha
              </label>
              <div className="has-focus:duration-200 has-focus:p-0.5 flex rounded-xl has-focus:bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
                <input
                  className="pl-2 p-0.5 rounded-xl bg-neutral-900 py-2 w-full focus:outline-none"
                  type="password"
                />
              </div>
            </div>
            <a className="hover:underline text-gray-400 text-end" href="">
              Esqueci minha senha
            </a>
            <button className="focus:animate-ping duration-300 hover:opacity-80 hover:cursor-pointer bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 ml-1.5 mb-1 rounded-xl py-2 font-bold text-xl">
              Entrar
            </button>
            <a className="text-gray-400 text-center hover:underline" href="">
              Ainda não tenho uma conta
            </a>
          </form>
        </div>
        <div className="focus:bg-white mt-7 md:mt-9 animate-horizontal size-2.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 ml-1.5 transition" />
      </div>
    </div>
  );
};

export default LoginForm;
