import React, { useState } from "react";
import { useStytch } from "@stytch/stytch-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stytchClient = useStytch();

  const signup = () => {
    stytchClient.passwords
      .strengthCheck({ email, password })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
    stytchClient.passwords.create({
      email,
      password,
      session_duration_minutes: 60,
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
      <button onClick={signup}>Signup</button>
    </div>
  );
};

export default Signup;
