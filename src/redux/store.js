import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './feature/adminSlice'
import globalReducer from './feature/globalSlice'

export const store = configureStore({
  reducer: {
    admin:adminReducer,
    global:globalReducer
  },
})