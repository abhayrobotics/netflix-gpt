import React from "react";
import { MovieById, Poster_URL, TMDB_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { toogleBtn } from "../utils/configSlice";
import { Total_Movie_list } from "../utils/ApiCallData";

const MovieCard = ({ movieItem }) => {
  const dispatch = useDispatch();

  const handleMovieDetail = (e) => {
    // console.log(e.target.id)
    dispatch(toogleBtn(true));
    const movieID =e.target.id
    movieDetails(e.target.id);
  };

  const movieDetails = async (ID) => {
    const url = MovieById + ID;
    // console.log(url);

    try {
      const data = await fetch(url, TMDB_Options);
      const json = await data.json();
      dispatch(addMovieDetails(json));
      console.log(json);
    } catch (e) {
      console.log(Total_Movie_list)
      
    }
  };

  return (
    <div
      key={movieItem?.id}
      className="w-40 sm:min-w-40  m-2 mx-auto sm:mr-2   cursor-pointer "
      onClick={handleMovieDetail}
    >
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
