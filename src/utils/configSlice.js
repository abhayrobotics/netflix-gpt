import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
        preferredLanguage :"en",
        closeBtn:false,
    },
    reducers:{
        changeLanguage :(state,action)=> {
            state.preferredLanguage =action.payload;
        },
        toogleBtn:(state,action)=>{
            state.closeBtn = action.payload;
        }
    }
})

export const {changeLanguage,toogleBtn} =configSlice.actions;

export default configSlice.reducer;