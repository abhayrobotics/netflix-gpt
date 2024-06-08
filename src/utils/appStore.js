import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import searchSlice from "./searchSlice";
import configSlice from "./configSlice";
import queryResultSlice from "./queryResultSlice";

const appStore =configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        search:searchSlice,
        config: configSlice,
        query: queryResultSlice,

    }
})

export default appStore; 