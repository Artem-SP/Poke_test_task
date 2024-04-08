import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAll = createAsyncThunk(
  'pokeAll',
  async (_, { rejectWithValue }) => {
    let count

    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      count = data.count
    } catch (error) {
      rejectWithValue(error.massage)
    }

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${count}`,
      )
      return data.results
    } catch (error) {
      rejectWithValue(error.massage)
    }
  },
)
