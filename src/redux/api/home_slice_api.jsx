import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1000,
  name:"home",
  age:49
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state) => {     
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
        console.log(action);
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
        state.value -= action.payload
    },

    incrementAge: (state) =>{
        state.age += 1
    },
    decrementAge: (state) => {
        state.age -= 1
      },
      incrementAgeByAmount: (state, action) => {
          console.log(action);
        state.age += action.payload
      },
      decrementAgeByAmount: (state, action) => {
          state.age -= action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , decrementByAmount , incrementAge , decrementAge, incrementAgeByAmount,decrementAgeByAmount} = homeSlice.actions

export default homeSlice.reducer