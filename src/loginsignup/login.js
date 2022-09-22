import React, { useContext, useState } from "react";
import { logcontstu } from "../Loginsignincontext/context";
import "./login.css";

import Button from "@mui/material/Button";
import { NavLink, Route, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

function Login() {
  const { student } = logcontstu;
  const { login, user } = useContext(logcontstu);

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [err, seterr] = useState("");

  const navigate = useNavigate();

  function loginuser() {
    if (!email.includes(".com")) {
      return seterr("Failed to Login.");
    }

    seterr("");
    login(email, pass)
      .then((res) => {
        alert("you are succesfully login!!");
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        seterr("Failed to Login.");
      });
  }

  return (
    <>
      <div class=" flex-r container logsign">
        <div class="flex-r login-wrapper">
          <div class="login-text">
            <div class="logo">
              <span>
                <i class="fab fa-facebook"></i>
              </span>
              <span>FreelanceHUB (Non-Dev.)</span>
            </div>
            <h1>Log In</h1>
            <p>It's not long before you embark on this journey! </p>
            {err && <Alert severity="error">{err}</Alert>}
            <form class="flex-c ff">
              <div class="input-box">
                <span class="label">E-mail</span>
                <div class=" flex-r input">
                  <input
                    type="text"
                    placeholder="name@abc.com"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  <i class="fas fa-at"></i>
                </div>
              </div>

              <div class="input-box">
                <span class="label">Password</span>
                <div class="flex-r input">
                  <input
                    type="password"
                    placeholder="8+ (a, A, 1, #)"
                    value={pass}
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                  />
                  <i class="fas fa-lock"></i>
                </div>
              </div>

              <div class="check">
                <NavLink to="/sforgot">Forgot Password?</NavLink>
              </div>

              <Button
                variant="contained"
                className="log"
                onClick={() => {
                  loginuser();
                }}
              >
                Login
              </Button>
              <span class="extra-line">
                <span>Don't have account?</span>
                <a>
                  <NavLink to="/ssignin"> Sign In</NavLink>
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
