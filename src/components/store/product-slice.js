import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductFromServer(state, action) {
      state.products = action.payload;
    },
  },
});

export const productSliceActions = productSlice.actions;
export default productSlice.reducer;
