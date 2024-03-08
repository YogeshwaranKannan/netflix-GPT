import { useSelector } from 'react-redux';
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import { usePopularPlayingMovies } from '../Hooks/usePopularPlayingMovies';
import { useUpcomingMovies } from '../Hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browser = () => {
  const showGPTsearchView =useSelector((store)=>store.gpt.showGPTsearch);
  useNowPlayingMovies(); 
  usePopularPlayingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {showGPTsearchView===true? <GPTSearch/> :
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
       
      }
    </div>
  )
}

export default Browser
