import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from'./GptComponent/GptSearch';
import useAllTimeFav from '../hooks/useAllTimeFav';
import { useSelector } from 'react-redux';
import useDiscoverMovies from '../hooks/useDiscoverMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
const Browse = () => {
  const showGPtSearch = useSelector((store) =>store.gpt.showGptSearch)
 useNowPlayingMovies();
 usePopularMovies();
 useAllTimeFav();
 useUpcomingMovies();
 useDiscoverMovies();
 useTopRatedMovies();

  return (
    <div>
      <Header/>
      {
         showGPtSearch ? (<GptSearch/>) :(
         <>
         <MainContainer/>
         <SecondaryContainer/>
         </>
      )}
    </div>
  )
}

export default Browse;