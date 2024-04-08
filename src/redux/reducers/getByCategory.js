import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getByCategory = createAsyncThunk(
  'pokeCategory',
  async (type, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
      return data.pokemon
    } catch (error) {
      return rejectWithValue(error.response.request.response)
    }
  },
)
