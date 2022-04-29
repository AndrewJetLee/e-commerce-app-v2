import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  quantity: 0,
  favorites: 0,
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
    updateCart: (state, action) => {
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
    setCart: (state, action) => {
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
      state.quantity = action.payload.products.length; 
    },
    resetCart: (state) => {
      return initialState;
    },
  },
});

export const { setCart, addProduct, removeProduct, resetCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
