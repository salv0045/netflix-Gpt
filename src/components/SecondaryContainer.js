import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies &&(
    <div className=" bg-black">
        <div className="-mt-55 pl-12 realtive z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"All Time Favourites"} movies={movies.allTimeFav}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Discover"} movies={movies.discoverMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        </div>
    </div>)
  )
};

export default SecondaryContainer