import React from 'react'
import GPTmovieSuggestion from './GPTmovieSuggestion'
import GPTsearchBar from './GPTsearchBar'
import { BACK_CDN } from '../utils/constants'

const GPTSearch = () => {
  return (
    
    <div>
       <div className='fixed -z-10'>
       <img src={BACK_CDN}alt='Backgroung' />
       </div>
       <GPTsearchBar/>
       <GPTmovieSuggestion/>
    </div>
  )
}

export default GPTSearch
