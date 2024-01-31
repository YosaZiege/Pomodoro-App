import {createSlice} from "@reduxjs/toolkit";
const initialState = {value: 5};

const breakSlice = createSlice({
    name: "break",
    initialState,
    reducers: {
        increment: (state)=> {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        restart: (state) => {
            state.value = 5;
        }
    }
});
export const {increment , decrement , restart}= breakSlice.actions;
export default breakSlice.reducer;