import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { Popular_movies, TMDB_Options } from "../utils/constant";
import { useEffect } from "react";
import { API_now_playing_movies } from "../utils/ApiCallData";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowplayingMovies();
    }
  }, []);

  const getNowplayingMovies = async () => {
    // try fetching
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        TMDB_Options
      );
      const nowplaying = await data.json();

    //   console.log(nowplaying.results);
      dispatch(addNowPlayingMovies(nowplaying.results));
    } 
    // if failed to fetch live data, then use hard coded data
    catch (error) {
    //   console.log(error);
      dispatch(addNowPlayingMovies(API_now_playing_movies))
    }
  };
};

export default useNowPlayingMovies;
