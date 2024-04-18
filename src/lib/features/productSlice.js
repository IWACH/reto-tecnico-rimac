import { createSlice } from "@reduxjs/toolkit";
import { generateCRUD } from "../api";

const initialState = { data: {} };

const productCRUD = generateCRUD(
  "https://rimac-front-end-challenge.netlify.app/api/plans.json",
  "products"
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    productCRUD.handleCRUDActions(builder);
  },
});

export default productSlice;

export const { fetchData: getProducts } = productCRUD;
