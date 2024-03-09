import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTmovieSuggestion = () => {
  const {movieNames,movieResults} = useSelector((store)=>store.gpt);
  if(!movieNames) return null;
  return (
    <div>
      <div>
        {movieNames.map((movie ,index ) => 
        <MovieList key={movie} title={movie} movieses={movieResults[index]}/>
        )}
      </div>
    </div>
  )
}

export default GPTmovieSuggestion
