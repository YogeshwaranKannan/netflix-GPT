import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movieses}) => {
  console.log(movieses);
  return (
    <div className='p-6 '>
    <h1 className='font-bold text-2xl text-white'>{title}</h1>
      
      <div className='flex overflow-x-scroll  '>
        
        <div className='flex py-3 '>
           {movieses?.map((movie) =>
              <MovieCard key={movie.id} path ={movie.poster_path}/>
          )}
        </div>

      </div>
    </div>
     
  )
}

export default MovieList
