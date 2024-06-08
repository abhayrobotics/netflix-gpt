import { createSlice } from "@reduxjs/toolkit";

const queryResultSlice = createSlice({
    name:"query",
    initialState: {
        queryResult: [],
        TmdbResult:[]
    },
    reducers: {
        addQueryResult :(state,action)=>{
            state.queryResult = action.payload;
        },
        addTmdbResult :(state,action)=>{
            state.TmdbResult.push(action.payload);
        }

    }

})

export const {addQueryResult,addTmdbResult} =queryResultSlice.actions;

export default queryResultSlice.reducer;
