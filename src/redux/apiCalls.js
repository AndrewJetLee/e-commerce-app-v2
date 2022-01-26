import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userSlice";
import { addProduct } from "./cartSlice";

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
        let productId = res.data.products[0].productId;
        const product = await publicRequest.get(`/products/find/${productId}`);
        res.data.products[0].image = product.data.image;
        res.data.products[0].title = product.data.title;
        dispatch(addProduct(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}