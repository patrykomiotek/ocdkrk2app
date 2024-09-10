import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ProductDto } from "./services";

// Define a type for the slice state
export interface State {
  products: ProductDto[];
}

// Define the initial state using that type
const initialState: State = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    add: (state, action: PayloadAction<ProductDto>) => {
      // state.value += action.payload;
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<ProductDto["id"]>) => {
      // state.value -= action.payload;
      state.products = state.products.filter(
        (elem) => elem.id !== action.payload
      );
    },
  },
});

export const { add, remove } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketProducts = (state: RootState) => state.basket.products;
export const selectBasketProductsCount = (state: RootState) =>
  state.basket.products.length;

export default basketSlice.reducer;
