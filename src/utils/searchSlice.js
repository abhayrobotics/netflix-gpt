import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"GptSearch",
    initialState:{
        gptSearchView:false,

    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.gptSearchView = !state.gptSearchView;
        }
    }
})

export const {toggleGptSearch} = searchSlice.actions;

export default searchSlice.reducer;
