import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  activeTab: "home" 
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    }
  },
});

export const { setActiveTab } = navSlice.actions;

export default navSlice.reducer;
