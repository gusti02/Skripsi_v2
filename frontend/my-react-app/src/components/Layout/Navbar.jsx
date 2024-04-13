import React, { useEffect, useState } from "react";
import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

function Navbar() {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0); // state the total cart
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((accumulator, item) => {
      return accumulator + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

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
      <div className="flex item-center bg-gray-800 p-2 rounded-md ml-5">
        <CiShoppingCart size={20} />
        <div className="absolute ml-2.5 mt-1.5 bg-red-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {totalCart}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
