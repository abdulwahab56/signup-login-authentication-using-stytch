import React from "react";

const Login = () => {
  return (
    <div>
      <input placeholder="Enter email..." />
      <input placeholder="Enter password..." />
      <button>Login</button>
      <div>
        <p>Forget your password</p>
        <button>Rest password</button>
      </div>
    </div>
  );
};

export default Login;
