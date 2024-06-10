import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import GeminiTextresult from "./GeminiTextresult";


const MovieSuggestion = () => {

  
  
  const tmdbresult =useSelector((store)=>store.query.TmdbResult)
  // console.log(tmdbresult)
  
      return (<>
       <div className="w-[80%] sm:w-11/12 h-full sm:h-[50vh] p-1 sm:p-4 my-6 sm:my-16 bg-black bg-opacity-85 mx-auto ">
        {/* <ShimmerCard /> */}
        {tmdbresult.length ==0?
        <GeminiTextresult />
        :<MovieList movies={tmdbresult} title={"Recommended Movies"} />
        }
       </div>
     
      </>
        )
}

export default MovieSuggestion