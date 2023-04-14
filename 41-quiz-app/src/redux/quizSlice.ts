import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  answers: number[]
}

const initialState: CounterState = {
  answers: [],
}

export const counterSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    select: (state, action) => {
      const { id, optionIndex } = action.payload
      state.answers[id] = optionIndex
    }
  },
})

export const { select } = counterSlice.actions

export default counterSlice.reducer