import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "../../types";

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        quantity?: number;
        size?: string;
      }>
    ) => {
      const { product, quantity = 1, size } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === product.id && (size ? item.size === size : !item.size)
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        const newItem: CartItem = {
          id: product.id,
          product,
          quantity,
          size,
          price: product.salePrice,
        };
        state.items.push(newItem);
      }

      const totals = calculateTotals(state.items);
      state.total = totals.total;
      state.itemCount = totals.itemCount;
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: string | number; size?: string }>
    ) => {
      state.items = state.items.filter((item) => {
        if (action.payload.size) {
          return !(
            item.id === action.payload.id && item.size === action.payload.size
          );
        }
        return item.id !== action.payload.id;
      });

      const totals = calculateTotals(state.items);
      state.total = totals.total;
      state.itemCount = totals.itemCount;
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string | number;
        quantity: number;
        size?: string;
      }>
    ) => {
      const { id, quantity, size } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && (size ? item.size === size : !item.size)
      );

      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (i) => !(i.id === id && (size ? i.size === size : !i.size))
          );
        } else {
          item.quantity = quantity;
        }
      }

      const totals = calculateTotals(state.items);
      state.total = totals.total;
      state.itemCount = totals.itemCount;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
