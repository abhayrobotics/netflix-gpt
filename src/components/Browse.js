import { useSelector } from "react-redux";
import useAddMovies from "../hooks/useAddMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {
  Popular_movies_URL,
  top_rated_movies_URL,
  upcoming_movies_URL,
} from "../utils/constant";
import {
  addPopularMovies,
  addTop_rated_movies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.search.gptSearchView);
  console.log(gptSearchView);

  // custom hook for fetching now playing movies
  useNowPlayingMovies();
  useAddMovies(Popular_movies_URL, addPopularMovies);
  useAddMovies(top_rated_movies_URL, addTop_rated_movies);
  useAddMovies(upcoming_movies_URL, addUpcomingMovies);

  return (
    <div className=" overflow-x-hidden">
      <Header />
      
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
