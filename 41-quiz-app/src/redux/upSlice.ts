import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const upSlice = createSlice({
    name: "up",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    },
});

export const { increment, decrement } = upSlice.actions;

export default upSlice.reducer;