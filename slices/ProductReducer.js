import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    gettingProductsError(state, action) {
      state.loading = false;
      state.error = action.loading || "Something Went Wrong";
    },
    allProduct(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
  },
});

export const { allProduct, fetchProducts, gettingProductsError } =
  slice.actions;

export default slice.reducer;
