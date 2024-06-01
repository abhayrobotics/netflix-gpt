import {  useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const VideoBackground = ({id}) => {

    const trailerVideo = useSelector((store)=>store?.movies?.trailerVideo);
  
    useFetchTrailer(id);
  return (
    <div>
        {/* {console.log(trailerVideo.key)} */}
        <iframe className="w-screen aspect-video h-screen"  src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?autoplay=1&mute=1&rel=0" } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground