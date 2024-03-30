import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDiscoverMovies } from '../utils/Slices/moviesSlice';
import { API_OPTION } from '../utils/constant';

const useDiscoverMovies = () => {
  const dispatch  =useDispatch();
  const discoverMovies = useSelector(store=>store.movies.discoverMovies);

  const getDiscoverMovies =async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&region=IN&sort_by=popularity.desc&with_origin_country=IN", API_OPTION);
    const json = await data.json();

    dispatch(addDiscoverMovies(json.results));
  };

  useEffect(()=>{
 !discoverMovies && getDiscoverMovies();
  },[])
};

export default useDiscoverMovies;