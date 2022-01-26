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

export const addToCart = async (dispatch, cartInfo) => {
    dispatch(loginStart());
    try {
        const res = await userRequest.post("/carts/", cartInfo);
        // debugger; 
        // console.log(res.data);
        
    } catch (err) {
        dispatch(loginFailure());
    }
}