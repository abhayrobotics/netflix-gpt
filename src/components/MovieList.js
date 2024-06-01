import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  return (
    <div className="mx-10 mb-10 flex flex-col " >
      <h2 className="text-2xl  my-2 text-white">{title}</h2>
      <div className="  flex  ">
        {movies?.map((movieItem) => {
          return (<MovieCard  movieItem={movieItem}/>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
