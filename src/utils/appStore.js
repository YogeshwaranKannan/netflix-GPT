import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import GPT from "./GPTsclice";

const appStore =  configureStore(
    {
      reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:GPT,
      },
    }
);
export default appStore;