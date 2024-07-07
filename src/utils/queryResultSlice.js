import { createSlice } from "@reduxjs/toolkit";

const queryResultSlice = createSlice({
  name: "query",
  initialState: {
    queryResult: [],
    TmdbResult: [],
  },
  reducers: {
    addQueryResult: (state, action) => {
      state.queryResult = action.payload;
    },
    addTmdbResult: (state, action) => {
    
        // for clearing old result
      if (state.TmdbResult.length === 10) {
        state.TmdbResult.length = 0;
      }

      state.TmdbResult.push(action.payload);
    },
  },
});

export const { addQueryResult, addTmdbResult, clearOldSearch } =
  queryResultSlice.actions;

export default queryResultSlice.reducer;
