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
import { API_popular_movies, API_top_rated_movies, API_upcoming_movies } from "../utils/ApiCallData";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.search.gptSearchView);
  // console.log(gptSearchView);

  
  // custom hook for fetching now playing movies
  const popular_movies= useSelector(store=> store.movies.popular_movies);
  const top_rated_movies = useSelector(store=> store.movies.top_rated_movies);
  const upcoming_movies = useSelector(store=> store.movies.upcoming_movies);
  
  // console.log(upcoming_movies)
    useNowPlayingMovies();
  
    // hook( hardcoded data, Api saved store data, store varible, store reducer function)
  useAddMovies(API_popular_movies,popular_movies,Popular_movies_URL, addPopularMovies);
  useAddMovies(API_top_rated_movies,top_rated_movies,top_rated_movies_URL, addTop_rated_movies);
  useAddMovies(API_upcoming_movies,upcoming_movies,upcoming_movies_URL, addUpcomingMovies);

  return (
    <div className=" overflow-x-hidden">
      <Header />
      
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <div className="">
          <MainContainer />
          <MovieListContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
