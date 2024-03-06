import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTION } from '../utils/constants'

const Browser = () => {
  const getNowplayingMovies =async()=>{
    const data = await  fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTION);
    const json = await data.json();
    console.log(json);
    console.log("fvniudffnb");
  }
  useEffect(()=>{
    getNowplayingMovies();
  })
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browser
