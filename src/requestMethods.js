import axios from "axios";

export const BASE_URL = "http://localhost:4000/api/";

// Redux persist stores User and Cart states in local storage as strings
// Access the token from local storage
export const user = localStorage.getItem("persist:user")
  ? JSON.parse(localStorage.getItem("persist:user"))
  : null;
export const currentUser = user && JSON.parse(user.currentUser);
export const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (TOKEN) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${TOKEN}`,
    },
  });
};

export const asosRequest = axios.create({
  baseURL: "https://asos2.p.rapidapi.com/products/",
  headers: {
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
    'X-RapidAPI-Key': '44584d1117msh4187c9a89d89d7ap119ac2jsn0f40f9c64b36'
  }
})
