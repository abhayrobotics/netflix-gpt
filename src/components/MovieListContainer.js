import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const MovieListContainer = () => {

  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if(movies==null) return ;
  
  console.log(movies)


  return (
    <div>
    <MovieList movies={movies} title={"Now Playing Movies"} />
    </div>
  )
}

export default MovieListContainer