import {
  TotalPriceContext,
  TotalPriceDispatchContext,
} from "../context/TotalPriceContext";
import { useContext } from "react";

{
  /* this hooks is used to get total price and linked to cart, and total price context */
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
