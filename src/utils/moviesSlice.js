import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        videoTrailer:null,
        popularMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowplayingmovies = action.payload;
        },
        addTrailerMovies:(state,action)=>{
          state.videoTrailer =action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },

    },
});
export const {addNowplayingMovies ,addTrailerMovies ,addPopularMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;