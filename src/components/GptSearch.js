import { useSelector } from "react-redux"
import MovieSuggestion from "./MovieSuggestion"
import SearchBar from "./SearchBar"


const GptSearch = () => {
  const query = useSelector((store)=> store.query.queryResult);
  // console.log(query)
  return (
    <div className=" ">
        <SearchBar />
        {
        query.length==0? <></>:
        <MovieSuggestion />
        }
    </div>
  )
}

export default GptSearch