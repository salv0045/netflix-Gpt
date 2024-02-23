import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { adddNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies =() =>{
      //Fetch data from TMDB API and update store
  
const dispatch = useDispatch();

const getNowPlayingMovies= async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
  const json = await data.json();
  dispatch(adddNowPlayingMovies(json.results));
};

useEffect(()=>{
getNowPlayingMovies();
},[]) ;
};
export default useNowPlayingMovies;