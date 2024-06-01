import React from "react";
import { Poster_URL } from "../utils/constant";

const MovieCard = ({movieItem}) => {

  return (
    <div key={movieItem.id} className="w-40 mr-2   ">
      <img
       className="w-40 rounded-md"
        src={Poster_URL + movieItem.poster_path}
        alt="movie Poster"
      />
    </div>
  );
};

export default MovieCard;
