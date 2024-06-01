
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieListContainer from "./MovieListContainer";


const Browse =()=>{

    // custom hook for fetching now playing movies
    useNowPlayingMovies();
    
    return(
        <div className=" ">

        <Header />
        <MainContainer/>
        <MovieListContainer />
        </div>
    )

}

export default Browse;