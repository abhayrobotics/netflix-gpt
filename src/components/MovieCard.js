import React from "react";
import { Poster_URL } from "../utils/constant";

const MovieCard = ({movieItem}) => {

  return (
    <div key={movieItem.id} className="min-w-32 mr-2   ">
      <img
       className="min-w-32 rounded-md"
        src={Poster_URL + movieItem.poster_path}
        alt="movie Poster"
      />
    </div>
  );
};

export default MovieCard;
