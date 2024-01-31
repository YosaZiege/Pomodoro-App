import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionState/session";
import breakReducer from "./breakState/break"
import playReducer from "./play"
import secondsReducer from "./secondsState/seconds";
export const store = configureStore({
  reducer: {
    session: sessionReducer,
    break: breakReducer,
    play: playReducer,
    seconds: secondsReducer
  },
});