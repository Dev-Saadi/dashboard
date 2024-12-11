import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export let admin_login = createAsyncThunk(
  "auth/admin_login",
  async (adminInfo) => {
    console.log("adminInfo from Reducer", adminInfo);

    try {
      let { data } = await api.post("/adminlogin", adminInfo);
    } catch (error) {
      console.log("error");
    }
  }
);

const initialState = {
  successMessage: "",
  errorMessage: "",
  loader: false,
  userInfo: "",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function

export default authReducer.reducer;
