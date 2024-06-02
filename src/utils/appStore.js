import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import searchSlice from "./searchSlice";
import configSlice from "./configSlice";

const appStore =configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        search:searchSlice,
        config: configSlice,

    }
})

export default appStore; 