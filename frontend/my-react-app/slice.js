import * as toolkit from "@reduxjs/toolkit";
const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 50 }));
