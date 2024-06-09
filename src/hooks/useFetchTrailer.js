import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { TMDB_Options } from "../utils/constant";
import { API_trailer } from "../utils/ApiCallData";

const useFetchTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    if (!trailerVideo) {
      getTrailer();
    }
  }, []);

  const getTrailer = async () => {
    try {
        
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        TMDB_Options,{
            timeout:5000
        }
      );
      const json = await data.json();
    //   console.log(json?.results);

      const filterVideos = json?.results?.filter(
        (video) => video.type === "Trailer"
      );
      // if zero trailer found show 1st video,else show 1st trailer
      const trailer = filterVideos == null ? json?.results[0] : filterVideos[0];
     
      dispatch(addTrailer(trailer));
    } 
    catch (error) {
        dispatch(addTrailer(API_trailer))
    }
  };
};

export default useFetchTrailer;
