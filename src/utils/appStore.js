import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import searchSlice from "./searchSlice";

const appStore =configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        search:searchSlice

    }
})

export default appStore; 