import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTypes = createAsyncThunk('pokeTypes', async () => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type/')

    return data.results
  } catch (err) {
    console.error(err)
  }
})
