import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  quantity: 0,
  total: 0,
  cartId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products = [...state.products, ...action.payload.products]
      state.total += (action.payload.products[0].price * action.payload.products[0].quantity);
      state.cartId = action.payload._id;  
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      // state.total = state.total - (action.payload.price * action.payload.quantity);
      // state.products = action.payload.products;

    },
    reset: () => {
        return initialState;
    }
  },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;

export default cartSlice.reducer;
