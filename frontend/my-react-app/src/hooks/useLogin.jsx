import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export function useLogin() {
  const [username, setUsername] = useState("");
  {
    /* Using componentDidMount with useEffect and setting username to setUsername useState.
        If token is not exist then redirect to login */
  }
  useEffect(() => {
    {
      /* Get Token from Local Storage */
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
}
