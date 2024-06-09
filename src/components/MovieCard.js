import React from "react";
import { MovieById, Poster_URL, TMDB_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { toogleBtn } from "../utils/configSlice";

const MovieCard = ({movieItem}) => {

  const dispatch =useDispatch();

  const handleMovieDetail =(e)=>{
    // console.log(e.target.id)
    dispatch(toogleBtn(true))
    movieDetails(e.target.id)
    
    }
    
    const movieDetails = async (id)=>{
      const url =MovieById +id
      console.log(url)
      const data = await fetch(url,TMDB_Options)
      const json =await data.json()
      dispatch(addMovieDetails(json))
    console.log(json)

  }

  return (
    <div key={movieItem?.id} className="w-40 sm:min-w-40  m-2 mx-auto sm:mr-2   cursor-pointer " onClick={handleMovieDetail} >
      <img
       className="rounded-md"
       id={movieItem.id}
        src={Poster_URL + movieItem?.poster_path}
        alt="movie Poster"
      />
    </div>
  );
};

export default MovieCard;
