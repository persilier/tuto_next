import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto flex items-center justify-center bg-slate-400">
      <h1>Login</h1>
      <form className="flex flex-col gap-4 w-[340px] ">
        <input type="text" />
        <input type="password" />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
