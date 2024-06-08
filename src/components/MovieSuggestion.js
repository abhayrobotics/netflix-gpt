import { useDispatch, useSelector } from "react-redux";
import { Search_URL, Search_URL_postfix, TMDB_Options } from "../utils/constant";
import MovieList from "./MovieList";
import { addTmdbResult } from "../utils/queryResultSlice";
import MovieCard from "./MovieCard";

const MovieSuggestion = () => {

  const dispatch = useDispatch();
  
  const tmdbresult =useSelector((store)=>store.query.TmdbResult)
  
      return (<>
       <div className="w-11/12 p-4 my-16 bg-black bg-opacity-85 mx-auto ">

        <MovieList movies={tmdbresult} title={"Our Suggestions"} />
       </div>
     
      </>
        )
}

export default MovieSuggestion