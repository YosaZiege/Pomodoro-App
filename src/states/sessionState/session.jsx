import {createSlice} from "@reduxjs/toolkit";
const initialState = {value: 25};

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        increment: (state)=> {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        restartsession: (state) => {
            state.value = 25;
        },
        setsession: (state, action) => {
            state.value = action
        }
    }
});
export const {increment , decrement , restartsession , setsession}= sessionSlice.actions;
export default sessionSlice.reducer;