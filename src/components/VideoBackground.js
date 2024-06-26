import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
      const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
      useMovieTrailer(movieId);
  return (
    <div className="h-full">
    <iframe
    className="w-full aspect-video overflow-hidden -z-20"  
    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&playlist=" + trailerVideo?.key }
    title="YouTube video player" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    >

    </iframe>
    </div>
  )
}

export default VideoBackground;

