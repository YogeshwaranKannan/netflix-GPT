import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    <div className='bg-black'>
      <div className='relative z-20 -mt-40'>
      <MovieList title={"Now playing"} movieses={movies.nowplayingmovies}/>
      <MovieList title={"Trending Movies"} movieses={movies.nowplayingmovies}/>
      <MovieList title={"Popular Movies"} movieses={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movieses={movies.upcomingMovies}/>
      <MovieList title={"Horror Movies"} movieses={movies.nowplayingmovies}/>
      </div>
      

    </div>
  )
}

export default SecondaryContainer;
