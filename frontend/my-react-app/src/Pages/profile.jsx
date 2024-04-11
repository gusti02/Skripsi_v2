import React from "react";
import { useLogin } from "../hooks/useLogin";

function ProfilePage() {
  {
    /* call the custom hook. If token is not exist then redirect to login. */
  }
  const username = useLogin();
  return (
    <div>
      <h1>Profile Page</h1>
      username : {username}
    </div>
  );
}

export default ProfilePage;
