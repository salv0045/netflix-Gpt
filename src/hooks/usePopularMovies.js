import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularMovies} from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies =() =>{
      //Fetch data from TMDB API and update store
  
const dispatch = useDispatch();

const getPopularMovies= async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION);
  const json = await data.json();
  dispatch(addPopularMovies(json.results));
};

useEffect(()=>{
getPopularMovies();
},[]) ;
};
export default usePopularMovies;