import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLimit = createAsyncThunk("pokeLimit", async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(data);
    console.log(data.count);
    return data.count;
  } catch (err) {
    console.error(err);
  }
});
