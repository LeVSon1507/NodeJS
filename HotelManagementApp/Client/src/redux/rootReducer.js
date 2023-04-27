import { combineReducers } from "@reduxjs/toolkit";
import { searchReducer,authReducer } from "./reducer";

export const allReducers = combineReducers({
    // add more reducers here
    searchReducer,
});