import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (movies == null) return;

  console.log(movies);

  return (
    <div className="  bg-black">
      <div className="-mt-40 relative z-10">

      <MovieList className="" movies={movies} title={"Now Playing Movies"} />
      <MovieList movies={movies} title={"Top rated Movies"} />
      <MovieList movies={movies} title={"Popular Movies"} />
      <MovieList movies={movies} title={"Cult Classic"} />
      </div>
    </div>
  );
};

export default MovieListContainer;
