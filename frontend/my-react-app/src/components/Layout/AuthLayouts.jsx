import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import Button from "../Elements/Button";

function AuthLayouts(props) {
  const { title, children, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <Button
          className="absolute top-2 right-2 bg-blue-600 text-white px-2 rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <h1 className="text-3xl font-bold mb-3 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your detail!
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

function Navigation(props) {
  const { type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  if (type === "login") {
    return (
      <p className={`text-sm text-center mt-5 ${isDarkMode && "text-white"}`}>
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className={`text-sm text-center mt-5 ${isDarkMode && "text-white"}`}>
        Have an account?{" "}
        <Link to="/Login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
}

export default AuthLayouts;
