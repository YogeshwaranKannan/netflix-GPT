import React, { useRef } from 'react'
import openai from "../utils/openAI"
import { API_OPTION } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../utils/GPTsclice';

const GPTsearchBar =  () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMoviesTMDB=async (movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"include_adult=false&language=en-US&page=1", API_OPTION);
        const json = await data.json();
        return json.results;
    }
    const filterData = async () =>{
        const query = "Act as a Movie Recommendation system and suggest some movies for the query"
        +searchText.current.value+"give me a list of 5 movies.";

        const chatCompletions = await openai.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-3.5-turbo',
        });
        console.log(chatCompletions?.choices[0]?.message.content.split(","));

        const MoviesList =chatCompletions?.choices[0]?.message.content.split(",");

        const nums = MoviesList.map((movie)=> searchMoviesTMDB(movie));

        const tmdbresults= await Promise.all(nums);

        dispatch(addGptMovies({movieName:MoviesList , MovieResult:tmdbresults}));

    }
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className="p-4 m-4 col-span-9" type="text" placeholder='Search '></input>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={filterData}>Search</button>
        </form>
    </div>
  )
}

export default GPTsearchBar
