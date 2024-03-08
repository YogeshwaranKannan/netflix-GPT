import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
     showGPTsearch:false,
    },
    reducers:{
        toggleGPTsearchView:(state,action)=>{
            state.showGPTsearch = !state.showGPTsearch;
        },
    },
});

export const{toggleGPTsearchView}=gptSlice.actions;

export default gptSlice.reducer;