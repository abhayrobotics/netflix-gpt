import React from "react";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";

const MovieList = ({ title, movies }) => {
  // console.log(title);
  // if( movies?.length ==0){

  //   return <ShimmerCard/>
  // }
  return (
    <div className="  mx-10 mb-10 flex flex-col " >
      <h2 className="text-2xl  my-3 text-white">{title}</h2>
      <div className=" flex overflow-x-scroll __posterScroll ">
        
        {movies?.map((movieItem) => {
          return (<MovieCard  movieItem={movieItem} key={movieItem?.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
