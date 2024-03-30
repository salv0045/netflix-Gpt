import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        upcomingMovies:null, 
        trailerVideo:null,
    }, 
    reducers:{
        adddNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies =action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies =action.payload;
        },
        addTrailerVideo:(state, action) =>{
            state.trailerVideo =action.payload;
        },
        addDiscoverMovies: (state, action) => {
            state.discoverMovies = action.payload;
        },
        addallTimeFav: (state, action) => {
            state.allTimeFav = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

    },
});

export const{ adddNowPlayingMovies, addTrailerVideo, addPopularMovies,  addUpcomingMovies, addallTimeFav, addTopRatedMovies, addDiscoverMovies}= moviesSlice.actions;
export default moviesSlice.reducer;