import { useSelector } from "react-redux"
import TitleContainer from "./TitleContainer";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    // fetchin data from movieslice using useSelector
    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    
    // movies is null that if is not loaded than early return

    if(movies==null) return;
    
    // else render
    // console.log(movies[1])

    const {title,overview,id} =movies[1]

  return (
    <div className="">
        <TitleContainer title={title} overview={overview}  />
        <VideoBackground id ={id}/>
       

    </div>
  )
}

export default MainContainer