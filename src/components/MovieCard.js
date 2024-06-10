import React from "react";
import { MovieById, Poster_URL, TMDB_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import { toogleBtn } from "../utils/configSlice";
import { Total_Movie_list } from "../utils/ApiCallData";

const MovieCard = ({ movieItem }) => {
  const dispatch = useDispatch();

  // get the movie id on the movie clicked  using the click handler
  const handleMovieDetail = (e) => {
    
    dispatch(toogleBtn(true));
    const movieID = e.target.id;
    // console.log(movieID)
    movieDetails(movieID);
  };


  // searchmovie information using the id passed
  const movieDetails = async (ID) => {
    const url = MovieById + ID;
    //  try hardcoded data
    try {
      const filteredList = Total_Movie_list.filter((item) => {
        if (item.id == ID) {
          return item;
        }
      });
      dispatch(addMovieDetails(filteredList[0]));
    }
     catch (e) {
     }
      // try live data
      try {
        const data = await fetch(url, TMDB_Options);
        const json = await data.json();
        dispatch(addMovieDetails(json));
        console.log(json);
      } catch (e) {
       console.log(e)
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
