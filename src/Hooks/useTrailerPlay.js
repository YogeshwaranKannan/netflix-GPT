import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerMovies } from '../utils/moviesSlice';
import { API_OPTION } from '../utils/constants';

export const useTrailerPlay = ()=>{
    const dispatch =useDispatch();
    const getMoviestrailer = async()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/1096197/videos?language=en-US', API_OPTION);
       const json = await data.json();
       const trailer = json.results.filter((e)=> e.type==="Trailer");
  
       dispatch(addTrailerMovies(trailer[0]));
    };
    useEffect(()=>{
      getMoviestrailer();
    },[]);
}