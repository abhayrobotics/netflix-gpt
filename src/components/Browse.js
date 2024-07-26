import { useDispatch, useSelector } from "react-redux";
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
  addNowPlayingMovies,
  addTrailer,
} from "../utils/movieSlice";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";
import GptSearch from "./GptSearch";
import {
  API_popular_movies,
  API_top_rated_movies,
  API_upcoming_movies,
  API_now_playing_movies,
  API_trailer,
} from "../utils/ApiCallData";
import { useEffect } from "react";
import MovieDetail from "./MovieDetail";
import Footer from "./Footer";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.search.gptSearchView);
  const dispatch = useDispatch();
  // console.log(gptSearchView);


  
  // as TMDB not working withoust VPN , for that hardcoded data
    const dispatchhardCodedData = () => {
      dispatch(addNowPlayingMovies(API_now_playing_movies));
      dispatch(addTop_rated_movies(API_top_rated_movies));
      dispatch(addUpcomingMovies(API_upcoming_movies));
      dispatch(addPopularMovies(API_popular_movies));
      dispatch(addTrailer(API_trailer));
    };
  useEffect(() => {
    dispatchhardCodedData();
  });

  // getting the value from store id present for memoization 
  const popular_movies = useSelector((store) => store.movies.popular_movies);
  const top_rated_movies = useSelector(
    (store) => store.movies.top_rated_movies
  );
  const upcoming_movies = useSelector((store) => store.movies.upcoming_movies);

  // custom hook for fetching now playing movies
  useNowPlayingMovies();

  // hook( hardcoded data, Api saved store data, store varible, store reducer function)
  useAddMovies(
    API_popular_movies,
    popular_movies,
    Popular_movies_URL,
    addPopularMovies
  );
  useAddMovies(
    API_top_rated_movies,
    top_rated_movies,
    top_rated_movies_URL,
    addTop_rated_movies
  );
  useAddMovies(
    API_upcoming_movies,
    upcoming_movies,
    upcoming_movies_URL,
    addUpcomingMovies
  );

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
      <MovieDetail/>
      {/* <Footer /> */}
    </div>
  );
};

export default Browse;
