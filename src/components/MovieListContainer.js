import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popular_movies);
  const top_rated = useSelector((store)=>store.movies.top_rated_movies);
  const upcoming = useSelector((store)=>store.movies.upcoming_movies)
  
  if (movies == null) return;

  // console.log(popularMovies);


  return (
    <div className="  bg-black">
      <div className="  pt-12 sm:pt-0  mt-0 sm:-mt-72 relative z-10">

      <MovieList className="" movies={movies} title={"Now Playing Movies"} />
      <MovieList movies={top_rated} title={"Top rated Movies"} />
      <MovieList movies={popularMovies} title={"Popular Movies"} />
      <MovieList movies={upcoming} title={"Upcoming Movies"} />
      </div>
    </div>
  );
};

export default MovieListContainer;
