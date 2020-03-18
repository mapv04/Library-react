import React from 'react';

//Components
import Container from './components/Container';
import AuthInput from './components/Auth_input';

function Login() {
  return (
    <Container
      component={
        <div>
          <h1 className="text-center text-5xl block">Login</h1>
          <div className="flex justify-center">
            <form className="w-2/5 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <AuthInput text="Username" id="username" />

              <AuthInput text="Password" id="password" />

              <div className="flex flex-wrap items-center justify-between">
                <button className="bg-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block">
                  Login
                </button>
                <h2 className="inline-block align-baseline font-bold text-sm mt-4 md:m-0">
                  ¿No tienes una cuenta?{' '}
                  <a className="border-b-2 border-transparent">Register</a>
                </h2>
              </div>
            </form>
          </div>
        </div>
      }
    />
  );
}

export default Login;
