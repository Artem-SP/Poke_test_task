import { createSlice } from '@reduxjs/toolkit'

import { getAll } from './getAll'
import { getSinglePoke } from './getSinglePoke'
import { getTypes } from './getTypes'
import { getByCategory } from './getByCategory'

const initialState = {
  allPokemon: undefined,
  singlePoke: {},
  types: null,
  allByCategory: [],
  status: null,
  error: null,
}

const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getAll.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.allPokemon = action.payload
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(getTypes.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getTypes.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.types = action.payload
      })
      .addCase(getSinglePoke.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getSinglePoke.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.singlePoke = action.payload
      })
      .addCase(getSinglePoke.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(getByCategory.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getByCategory.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.allByCategory = action.payload
      })
      .addCase(getByCategory.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  },
})

export default pokeSlice.reducer
