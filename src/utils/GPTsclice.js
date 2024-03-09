import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
     showGPTsearch:false,
     movieNames:null,
     movieResults:null,
    },
    reducers:{
        toggleGPTsearchView:(state,action)=>{
            state.showGPTsearch = !state.showGPTsearch;
        },
        addGptMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const{toggleGPTsearchView , addGptMovies}=gptSlice.actions;

export default gptSlice.reducer;