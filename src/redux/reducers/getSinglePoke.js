import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getSinglePoke = createAsyncThunk(
  'pokeSingle',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      )
      const poke = {
        immageUrl: data.sprites.front_default,
        moves: data.moves.map(move => move.move.name),
        stats: data.stats.map(stat => {
          return { base_stat: stat.base_stat, name: stat.stat.name }
        }),
      }

      return poke
    } catch (error) {
      return rejectWithValue(error.response.request.response)
    }
  },
)
