import { configureStore } from "@reduxjs/toolkit";
import { CharactersSlice } from "../Slices/CharactersSlice";

export const store = configureStore({
  reducer: { characters: CharactersSlice.reducer },
});
