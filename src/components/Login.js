import { useStytch } from "@stytch/stytch-react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stytchClient = useStytch();
  const login = () => {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
  };
  const resetPasswordByEmail = () => {
    stytchClient.passwords.resetByEmailStart({
      email: "abdulwahab5555556@gmail.com",
    });
  };
  return (
    <div>
      <input
        placeholder="Enter email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Enter password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <div>
        <p>Forget your password</p>
        <button onClick={resetPasswordByEmail}>Reset password</button>
      </div>
    </div>
  );
};

export default Login;
