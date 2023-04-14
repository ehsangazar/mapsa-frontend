import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  counting: boolean
}

const initialState: CounterState = {
  value: 0,
  counting: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    startCounting: (state) => {
      state.counting = true
    },
    stopCounting: (state) => {
      state.counting = false
    }
  },
})

export const { increment, startCounting, stopCounting } = counterSlice.actions

export default counterSlice.reducer