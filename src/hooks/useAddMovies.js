import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_Options } from "../utils/constant";
import Error from "../components/Error";

const useAddMovies = (harcodedData,variable, Url, addMoviesCategory) => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    // only calling the api if not loaded already
   
      !variable && getMovies();
   
  }, []);

  const getMovies = async () => {
    try {
      
      const data = await fetch(Url, TMDB_Options);
      const json = await data.json();

      
      dispatch(addMoviesCategory(json.results));
    } 
    // if APi fetching fails call the hard coded data
    catch (error) {
      <Error />
      // console.log(error);
      dispatch(addMoviesCategory(harcodedData));
    }
  };
};

export default useAddMovies;
