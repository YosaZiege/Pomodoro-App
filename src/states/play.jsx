
import {createSlice} from "@reduxjs/toolkit";

const initialState =  {value: false}

const playSlice = createSlice({
    name: "play",
    initialState,
    reducers:
    {
        unplay: (state) => {
            state.value = false;
        },
        playT: (state) => {
            state.value = true;
        }
    }
})

export const {unplay , playT}= playSlice.actions;
export default playSlice.reducer;