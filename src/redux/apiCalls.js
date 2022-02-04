import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userSlice";
import { setCart, addProduct, removeProduct, resetCart, updateCart } from "./cartSlice";

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

export const getUserCart = async (dispatch, userId, token) => {
    try {   
        const res = await userRequest(token).get(`/carts/find/${userId}`);
        dispatch(setCart(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const addToCart = async (dispatch, cartInfo, token) => {
    try {
        const res = await userRequest(token).post("/carts/", cartInfo);
        dispatch(addProduct(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const editCart = async (dispatch, editedCart, type, token) => {
    let userId = editedCart.userId;
    let updatedCart = {
        userId: editedCart.userId,
        products: editedCart.products,
    }
    if (type === "update") {
        try {
            const res = await userRequest(token).put(`/carts/${userId}`, updatedCart);
            dispatch(updateCart(res.data))
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            const res = await userRequest(token).put(`/carts/${userId}`, updatedCart);
            dispatch(removeProduct(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}

export const editCount = async (dispatch, payload, token) => {
        let userId = payload.userId;
        try {
            const res = await userRequest(token).put(`/carts/${userId}`, {
                productId: payload.productId,
                quantity: payload.quantity
            });
            dispatch(updateCart(res.data))
        } catch (err) {
            console.log(err);
        }
}

export const deleteCart = async (dispatch, userId, token) => {
    try {
        await userRequest(token).delete(`/carts/${userId}`);
        dispatch(resetCart());
    } catch (err) {
        dispatch(loginFailure());
    }
}