import React from "react";
import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";

function Navbar() {
  const username = useLogin();

  {
    /* Handler Logout, after click logout will redirect to login and remove token */
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
      {username}
      <Button className="bg-black ml-5" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Navbar;
