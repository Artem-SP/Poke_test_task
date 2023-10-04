import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("pokeAll", async (count) => {
  // let count;

  // try {
  //   const { data } = await axios.get("https://pokfeapi.co/api/v2/pokemon");
  //   count = data.count;
  //   // return data.count;
  // } catch (err) {
  //   console.error(err);
  // }

  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=5000`
      // `https://pokeapi.co/api/v2/pokemon?limit=${count}`
      // `https://pokeapi.co/api/v2/pokemon?limit=${end}&offset=${start}`
    );

    data.results.forEach(async (item) => {
      let pokemonsList = [];
      let { data } = await axios.get(item.url);
      // console.log(data);
      // data.sprites.front_default

      // console.log(data);
      pokemonsList.push(data);
    });

    // console.log(pokemonsList);
    // console.log(pokemonsList.length);
    return data.results;
  } catch (err) {
    console.error(err);
  }
  // return pokemonsList;
});
