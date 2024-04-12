import React, { Fragment, useEffect, useRef, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

// const products = [
//     {
//         id: 1,
//         name: 'Sepatu Baru',
//         price: 1000000,
//         image: '/images/shoes1.jpg',
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Atque veritatis accusantium totam, hic iure sapiente
//             expedita sunt nam a corrupti aut eius. Excepturi
//             ab at debitis labore eius id nulla.`
//     },
//     {
//         id: 2,
//         name: 'Sepatu Lama',
//         price: 5000000,
//         image: '/images/shoes1.jpg',
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit`
//     },

//     {
//         id: 3,
//         name: 'Sepatu Pumi',
//         price: 2400000,
//         image: '/images/shoes1.jpg',
//         description: `Ini adalah sepatu baru dari Brand Pumi`
//     },
// ]

{
  /* Products Page */
}
function ProductsPage() {
  {
    /* Using useState */
  }
  const [cart, setCart] = useState([]);
  const [totalPice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  {
    /* Using componentDidMount with useEffect */
  }
  useEffect(() => {
    /* Get Cart from Local Storage if none then empty */
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  {
    /* Fetching data from API and calling the getProducts function */
  }
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

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
    /* Handler Logout, after click logout will redirect to login and remove token */
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  {
    /* Handler Add To Cart by find the id of item and add to cart */
  }
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  {
    /* Using useRef */
  }
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

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

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
        {username}
        <Button className="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {/* Card Products using rendering map list*/}
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header
                  image={product.image}
                  id={product.id}
                ></CardProducts.Header>
                <CardProducts.Body name={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          {/* Create a Table for Cart */}
          <table className="text-left table-auto border-separate border-spacing-x-2">
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
                  const product = products.find(
                    (product) => product.id === item.id
                  );
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
                    {totalPice.toLocaleString("id-ID", {
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
          {/* Limit of Table */}
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
