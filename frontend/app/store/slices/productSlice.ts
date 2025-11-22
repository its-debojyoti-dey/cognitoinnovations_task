import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string | number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  removeProduct,
  setSelectedProduct,
  setLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer;
