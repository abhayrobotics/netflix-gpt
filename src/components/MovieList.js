import React from "react";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";

const MovieList = ({ title, movies }) => {
  // console.log(title);
  // if( movies?.length ==0){

  //   return <ShimmerCard/>
  // }
  return (
    <div className=" mx-4 sm:mx-10 mb-10 flex flex-col " >
      <h2 className="text-xl sm:text-2xl   my-3 mx-auto sm:mx-0 text-white">{title}</h2>
      <div className=" flex flex-wrap sm:flex-nowrap sm:overflow-x-scroll sm:__posterScroll ">
        
        {movies?.map((movieItem) => {
          return (<MovieCard  movieItem={movieItem} key={movieItem?.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
