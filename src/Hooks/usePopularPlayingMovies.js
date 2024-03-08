import { API_OPTION } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const usePopularPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const GETPopularPlayingMovies =async()=>{
      const data = await  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION);
      const json = await data.json();
      dispatch(addPopularMovies(json?.results));
    }
    useEffect(()=>{
        GETPopularPlayingMovies();
    },[]);
};
