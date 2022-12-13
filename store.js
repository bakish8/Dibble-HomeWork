import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './Features/StarSlice'
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})
