import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        videoTrailer:null,
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
            state.nowplayingmovies = action.payload;
        },
        addTrailerMovies:(state,action)=>{
          state.videoTrailer =action.payload;
        }
    },
});
export const {addNowplayingMovies ,addTrailerMovies}=moviesSlice.actions;
export default moviesSlice.reducer;