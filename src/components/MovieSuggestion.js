import { useDispatch, useSelector } from "react-redux";
import { Search_URL, Search_URL_postfix, TMDB_Options } from "../utils/constant";
import MovieList from "./MovieList";
import { addTmdbResult } from "../utils/queryResultSlice";
import MovieCard from "./MovieCard";

const MovieSuggestion = () => {

  const dispatch = useDispatch();
  // const queryItems = useSelector((store)=>store.query.queryResult);
  const tmdbresult =useSelector((store)=>store.query.TmdbResult)
  // console.log(queryItems)
      
  // search the movie in tmdb api and how result
  
  // const handleSearch = async ()=>{
  //   const URL1 = Search_URL + queryItems[0] + Search_URL_postfix;
  //   console.log(URL1)
  //   const searchResult = await fetch(URL1,TMDB_Options);
  //   const json = await  searchResult.json();
  //   // console.log(json)
  //   console.log(json.results)
  //   // dispatch(addTmdbResult(json.results))
  //   json?.results?.map((item)=>{
  //     console.log(item.name)
  //     })

  //     }
      
      
      // handleSearch();
      return (<>
        <div>MovieSuggestion</div>
      <MovieList movies={tmdbresult} title={"Results"} />
      {/* <MovieCard movieItem={tmdbresult[0]}/> */}
      </>
        )
}

export default MovieSuggestion