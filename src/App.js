import { useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/stytch-react";

function App() {
  const [toggle, setToggle] = useState(false);
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-a241de09-51cc-4881-a0c7-1875d27e1188"
  );
  return (
    <div className="App">
      <div className="nav">
        <Link to="/signup" className="nav-link" onClick={() => setToggle(true)}>
          Signup
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </div>
      <StytchProvider stytch={stytchClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restpassword/*" element={<ResetPassword />} />
        </Routes>
      </StytchProvider>

      {toggle && <button>Logout</button>}
    </div>
  );
}

export default App;
