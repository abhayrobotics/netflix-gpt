import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title);
  return (
    <div className="px-8 flex flex-col " >
      <h2 className="text-2xl  py-2">{title}</h2>
      <div className="  flex overflow-x-scroll ">
        {movies?.map((movieItem) => {
          return (<MovieCard  movieItem={movieItem}/>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
