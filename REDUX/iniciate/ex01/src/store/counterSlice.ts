
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'



// Define a type for the slice state
export interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    erase:(state) => {state.value = 0;},
    inclementByPar: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    } 
  },
})

export const { increment, decrement, erase, inclementByPar} = counterSlice.actions

export const getValueCounter = (state: RootState) => state.counter.value;
export default counterSlice.reducer
