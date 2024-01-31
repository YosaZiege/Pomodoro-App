import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1500,
    type: "session",
};

const secondsSlice = createSlice({
    name: "seconds",
    initialState,
    reducers: {
        updateSeconds: (state, action) => {
            state.value = action.payload.value;
        },
        setSeconds: (state, action) => {
            state.value = action.payload.value;
            state.type = action.payload.type; 
        },
        resetSeconds: (state) => {
            state.value = 1500;
            state.type = "session";
        },
    },
});

export const { setSeconds, resetSeconds, updateSeconds } = secondsSlice.actions;
export default secondsSlice.reducer;
