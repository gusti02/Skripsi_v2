import React from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

// This is using nestes component to create card
function CardProducts(props) {
  const { children } = props;
  return (
    <div
      className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3
    my-2 flex flex-col justify-between"
    >
      {children}
    </div>
  );
}

function Body(props) {
  // this is the body of card
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)} ...
        </h5>
      </a>
      <p className="text-white text-m">{children.substring(0, 100)} ...</p>
    </div>
  );
}

function Footer(props) {
  // This is footer of card
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-5 pb-3 item-center">
      <span className="text-white text-m font-bold">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
      <Button
        className="bg-blue-600"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add To Cart
      </Button>
    </div>
  );
}

function Header(props) {
  // this is header of card
  const { image, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
}

// Declaration of card children
CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;

export default CardProducts;
