import { createSlice } from "@reduxjs/toolkit";

const mode = localStorage.getItem("mode") || "light";

const colorSlice = createSlice({
  name: "color",
  initialState: {
    mode: mode,
    colors: {
      bgColor: "#ffffff",
      textColor: "#000000",
      primaryColor: "#4B6BFB",
      secondaryColor: "#F4F4F5",
    },
  },
  reducers: {
    getMode: (state, action) => {
      state.mode = action.payload;
      if (action.payload === "dark") {
        state.colors.bgColor = "#000000";
        state.colors.textColor = "#ffffff";
      } else {
        state.colors.bgColor = "#ffffff";
        state.colors.textColor = "#000000";
      }
    },
  },
});

export const { getMode } = colorSlice.actions;
export default colorSlice.reducer;
