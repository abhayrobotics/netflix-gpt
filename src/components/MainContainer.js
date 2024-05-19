import { useSelector } from "react-redux"
import TitleContainer from "./TitleContainer";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    // fetchin data from movieslice using useSelector
    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    
    // movies is null that is not loaded than early return

    if(movies==null) return;
    
    // else render
    console.log(movies[0])

    const {title,overview} =movies[0]

  return (
    <div>
        <TitleContainer title={title} overview={overview}  />
        <VideoBackground />

    </div>
  )
}

export default MainContainer