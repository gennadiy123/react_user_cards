import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    list: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.list.push(action.payload);
    },
    removeCard: (state, action) => {
      state.list = state.list.filter((card) => card.id !== action.payload);
    },
      changeCard: (state, action) => {
      const { id, description } = action.payload;
        const cardIndex = state.list.findIndex((card) => card.id === id);
      if (cardIndex !== -1) {
        state.list[cardIndex].description = description;
      }
    },
  },
});

export const { addCard, removeCard, changeCard } = cardSlice.actions;
export const selectCards = (state) => state.cards.list;

export default cardSlice.reducer;
