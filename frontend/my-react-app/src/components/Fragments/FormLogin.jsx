import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");

  {
    /* Handle Event Login */
  }
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem('email', event.target.email.value) /* Take Value of Email */
    // localStorage.setItem('password', event.target.password.value) /* Take Value of Password */

    // take value from data
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    {
      /* Call Login Service */
    }
    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setLoginFailed(response.response.data);
      }
    });
  };

  {
    /* useRef to focus on username form */
  }
  const usernameRef = useRef(null);

  {
    /* useEffect to focus on username form */
  }
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        placeholder="Jhon Doe"
        label="Username"
        ref={usernameRef}
      />
      <InputForm
        name="password"
        type="password"
        placeholder="********"
        label="Password"
      />
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {/* Show this login failed message if invalid login */}
      {loginFailed && (
        <p className="text-red-500 text-center mt-4">{loginFailed}</p>
      )}
    </form>
  );
}

export default FormLogin;
