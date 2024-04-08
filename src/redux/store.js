import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import poke from './reducers/poke'

export const store = configureStore({
  reducer: {
    poke,
  },
  devTouls: true,
})

export const useStoreDispatch = () => useDispatch()
