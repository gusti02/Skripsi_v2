import React, { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

function Label(props) {
  const { htmlfor, children } = props;
  {
    /* Add State for Dark Mode and change it to white text */
  }
  const { isDarkMode } = useContext(DarkMode);
  return (
    <label
      htmlFor={htmlfor}
      className={`block text-slate-700 text-sm font-bold mb-2 ${
        isDarkMode && "text-white"
      }`}
    >
      {children}
    </label>
  );
}

export default Label;
