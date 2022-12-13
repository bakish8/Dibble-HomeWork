import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  stars: [],
  value: 0,
}

export const StarSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      console.log(action.payload)
      state.stars = [...state.stars, action.payload]
      state.value = state.value += 1
      console.log(state.stars)
      console.log(state.value)
    },
    renmoveFromBasket: (state, action) => {
      const Index = state.stars.findIndex((star) => star.id === action.payload)
      let NewBasket = [...state.stars]
      if (Index >= 0) {
        NewBasket.splice(Index, 1)
      } else {
        console.log(`cant  renmove ${action.payload} is not in star list`)
      }
      state.stars = NewBasket
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, renmoveFromBasket } = StarSlice.actions
export const selectStarSliceItems = (state) => state.basket.stars

export default StarSlice.reducer
