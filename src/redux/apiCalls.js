import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userSlice";
import { addProduct, removeProduct } from "./cartSlice";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) { 
        dispatch(loginFailure());
    }
}

export const register = async (dispatch, newUser) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/register", newUser);
      dispatch(registerSuccess());
      return res.data; 
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const addToCart = async (dispatch, cartInfo) => {
    try {
        const res = await userRequest.post("/carts/", cartInfo);
        dispatch(addProduct(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const editCart = async (dispatch, editedCart) => {
    let cartId = editedCart.cartId; 
    let updatedCart = {
        userId: editedCart.userId,
        products: editedCart.products,
    }
    try {
        const res = await userRequest.put(`/carts/${cartId}`, updatedCart);
        dispatch(removeProduct(res.data))
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const deleteCart = async (dispatch, cartId) => {
    try {
        const res = await userRequest.delete(`/carts/${cartId}`);
    } catch (err) {
        dispatch(loginFailure());
    }
}