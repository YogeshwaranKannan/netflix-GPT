import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = (props) => {
  if(!props.path) return null;
  return (
    <div className='w-[150px]  m-1 '>
      <img src={IMG_CDN + props.path} alt='movie card'/>
    </div>
  )
}

export default MovieCard
