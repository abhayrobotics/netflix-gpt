import { useSelector } from "react-redux"

const MainContainer = () => {
    // fetchin data from movieslice using useSelector
    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    
    // movies is null that is not loaded than early return

    if(movies==null) return;
    
    // else render
    console.log(movies[0])

  return (
    <div>
        <div>MainContainer</div>
    </div>
  )
}

export default MainContainer