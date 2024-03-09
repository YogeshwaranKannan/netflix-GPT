import { API_OPTION } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowplayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'

export const useNowPlayingMovies = ()=>{
  const nowplayingmovies  = useSelector((store)=> store.movies.nowplayingmovies);
    const dispatch = useDispatch();
    const getNowplayingMovies =async()=>{
      const data = await  fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTION);
      const json = await data.json();
      dispatch(addNowplayingMovies(json?.results));
    }
    useEffect(()=>{
      !nowplayingmovies && getNowplayingMovies();
    },[]);
};
