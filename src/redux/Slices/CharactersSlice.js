import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  characterFiltrado: {
    img_url: "",
    name: "",
    abilities: {},
  },
};

export const CharactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    loadCharacters: (state, action) => {
      state.data = action.payload;
    },
    filterCharacter: (state, action) => {
      if (state.date.length > 0) {
        state.characterFiltrado = state.data.find(
          (character) => character.id === action.payload
        );
      }
    },
  },
});

export const { loadCharacters, filterCharacter } = CharactersSlice.actions;
