import { useDispatch, useSelector } from "react-redux";
import { Search_URL, Search_URL_postfix, TMDB_Options } from "../utils/constant";
import MovieList from "./MovieList";
import { addTmdbResult } from "../utils/queryResultSlice";
import MovieCard from "./MovieCard";
import ShimmerCard from "./ShimmerCard";

const MovieSuggestion = () => {

  const dispatch = useDispatch();
  
  const tmdbresult =useSelector((store)=>store.query.TmdbResult)
  
      return (<>
       <div className="w-[95%] sm:w-11/12 h-full sm:h-[50vh] p-1 sm:p-4 my-6 sm:my-16 bg-black bg-opacity-85 mx-auto ">
        {/* <ShimmerCard /> */}
        <MovieList movies={tmdbresult} title={"Recommended Movies"} />
       </div>
     
      </>
        )
}

export default MovieSuggestion