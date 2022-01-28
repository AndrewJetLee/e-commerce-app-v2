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
      state.products = [...action.payload.products];
      if (action.payload.products.length !== 0) {
        state.total =
        action.payload.products.reduce((total, item) => {
          return total + (item.price * item.quantity); 
        }, 0)
      } else if (action.payload.products.length === 1) {
        state.total = action.payload.products[0].price * action.payload.products[0].quantity;
      } else {
        state.total = 0;
      }
      state.cartId = action.payload._id;
    },
    removeProduct: (state, action) => {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
      state.products = [...action.payload.products];
      if (action.payload.products.length !== 0) {
        state.total =
        action.payload.products.reduce((total, item) => {
          return total + (item.price * item.quantity); 
        }, 0)
      } else if (action.payload.products.length === 1) {
        state.total = action.payload.products[0].price * action.payload.products[0].quantity;
      } else {
        state.total = 0;
      }
      
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;

export default cartSlice.reducer;
