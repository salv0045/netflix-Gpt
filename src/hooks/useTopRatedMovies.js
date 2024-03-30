import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant';
import { addTopRatedMovies } from '../utils/Slices/moviesSlice';

const useTopRatedMovies = () => {
 const dispatch =useDispatch();
 const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

 const getTopRatedMovies = async()=>{
    const data = await fetch ("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=1&region=IN&sort_by=popularity.desc&vote_average.gte=8&watch_region=IN", API_OPTION);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
 };
 useEffect(()=>{
    !topRatedMovies && getTopRatedMovies();
 },[]);
}

export default useTopRatedMovies;