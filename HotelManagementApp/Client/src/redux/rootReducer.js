import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer } from "./reducer";

export const allReducers = combineReducers({
    // add more reducers here
    searchReducer,
});