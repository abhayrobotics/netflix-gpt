import { createSlice } from "@reduxjs/toolkit";




const movieSlice = createSlice({
    name:"movies",
    initialState : {
     trailerVideo:null,   
     nowPlayingMovies: null,
     popular_movies:null,
     top_rated_movies:null,
     upcoming_movies:null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popular_movies =action.payload;
        },
        
        addTop_rated_movies:(state,action)=>{
            state.top_rated_movies =action.payload;
        },
        
        addUpcomingMovies:(state,action)=>{
            state.upcoming_movies =action.payload;
        },
        addTrailer:(state,action) =>{
            state.trailerVideo = action.payload
        }
    }

})

export const {addNowPlayingMovies, addTrailer,addTop_rated_movies,addPopularMovies,addUpcomingMovies} =movieSlice.actions;
export default movieSlice.reducer;