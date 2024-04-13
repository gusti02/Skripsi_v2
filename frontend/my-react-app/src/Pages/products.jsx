import React, { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layout/Navbar";

{
  /* Products Page */
}
function ProductsPage() {
  {
    /* Using useState */
  }
  const [products, setProducts] = useState([]);
  const username = useLogin();

  {
    /* Fetching data from API and calling the getProducts function */
  }
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
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
                <CardProducts.Footer price={product.price} id={product.id} />
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsPage;
