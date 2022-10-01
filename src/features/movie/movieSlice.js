import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    disneyMovies: [],
    MarvelMovies: []
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers :{
        setDisneyMovies: (state , action) =>{
            state.disneyMovies = action.payload;
        },
        setMarvelMovies: (state , action) =>{
            state.MarvelMovies = action.payload;
        }
    }
})

export const {setDisneyMovies , setMarvelMovies} = movieSlice.actions;

export const selectDisneyMovies = (state) => state.movie.disneyMovies;
export const selectMarvelMovies = (state) => state.movie.MarvelMovies;

export default movieSlice.reducer;