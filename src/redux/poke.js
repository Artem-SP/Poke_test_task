import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getPokeApi } from "../api/poke";
import { getLimitApi } from "../api/poke";
import axios from "axios";
import { getAll } from "./reducers/getAll";
import { getLimit } from "./reducers/getLimit";

const initialState = {
  allPokemon: undefined,
  count: null,
  results: [],
};

// export const getLimit = createAsyncThunk(
//   "getLimit",

//   async () => {
//     const response = getLimitApi();

//     return response.json();
//   }
// );

// export const getPoke = createAsyncThunk(
//   "getPoke",

//   async () => {
//     const response = getPokeApi(initialState.count);

//     return response.json();
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       //   console.log(state);
//       //   console.log(action);
//       //   state.list.push({ id: state.list.length, title: action.payload.title });
//     },
//   },

const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    // addProduct: (state, action) => {
    //   //   console.log(state.list.products);
    //   //   console.log(typeof state.list);
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getLimit.fulfilled, (state, action) => {
      state.count = action.payload;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      // console.log(count);
      console.log(action);
      state.allPokemon = action.payload;
    });
  },
});

// export const { addProduct } = productsSlice.actions;
export default pokeSlice.reducer;
