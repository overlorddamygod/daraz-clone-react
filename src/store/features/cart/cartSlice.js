import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      state.items.splice(itemIndex, 1);
    },
    incrementQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity++;
    },
    decrementQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity >= 1) item.quantity--;
    },
    changeQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
  },
});

const checkIfIdExists = (items, id) => {
  for (const item of items) {
    if (item.id == id) return item;
  }
  return false;
};

// Action creators are generated for each case reducer function
export const { addItem, incrementQty, decrementQty, changeQty, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
