import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="md:w-48 w-40 pr-4 transition-transform transform hover:scale-90 cursor-pointer">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath}
        />
    </div>
  )
};

export default MovieCard