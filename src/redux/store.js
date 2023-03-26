import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './feature/adminSlice'

export const store = configureStore({
  reducer: {
    admin:adminReducer
  },
})