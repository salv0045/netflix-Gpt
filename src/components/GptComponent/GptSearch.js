import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../../utils/constant';

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
      <img 
      //  className="sm:h-screen object-cover md:w-fit"
        src={BG_URL}
        alt="logo"
        />
        </div>
        <div className="" >
        < GptSearchBar/>
        <GptMovieSuggestions/>

    </div>
    </>
  )
};

export default GptSearch;