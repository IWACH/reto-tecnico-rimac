import { createSlice } from "@reduxjs/toolkit";
import { generateCRUD, saveObject } from "../api";

const initialState = { data: {} };

const userCRUD = generateCRUD(
  "https://rimac-front-end-challenge.netlify.app/api/user.json",
  "users"
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    userCRUD.handleCRUDActions(builder);
  },
});

export default userSlice;

export const { fetchData: getUsers, saveObject: saveUserObject } = userCRUD;
