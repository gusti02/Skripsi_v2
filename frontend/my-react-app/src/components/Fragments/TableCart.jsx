import React, { useState, useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

function TableCart(props) {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  {
    /* Using componentDidUpdate with useEffect */
  }
  useEffect(() => {
    /* Calculate Total Price */
    /* If cart is not empty then calulate, and store to Local Storage */
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((accumulator, item) => {
        const product = products.find((product) => product.id === item.id);
        return accumulator + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      /* Store Cart to Local Storage */
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  {
    /* useRef to DOM the total price table row, if the cart is not empty then render 
  the total price table row, if empty then don't render */
  }
  const totalPriceRef = useRef(null);

  useEffect(() => {
    // If cart is not empty then render the total price table row, if empty then don't render
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  {
    /* return the table */
  }
  return (
    <table
      className={`text-left table-auto border-separate border-spacing-x-2 ${
        isDarkMode && "text-white"
      }`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td>{item.qty}</td>
                <td>
                  {(item.qty * product.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </td>
              </tr>
            );
          })}
        {/* Add Total Price Table Row */}
        <tr ref={totalPriceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableCart;
