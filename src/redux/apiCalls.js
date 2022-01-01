import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userSlice";

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

export const updateCart = async (dispatch, payload) => {
    const { userId, products } = payload;  
    debugger; 
    try {
        const res = await userRequest.put(`/carts/${userId}`, products);
    } catch (err) {
        return err
    }
}