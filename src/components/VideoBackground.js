import { useEffect } from "react"
import { TMDB_Options } from "../utils/constant";

const VideoBackground = ({id}) => {


    useEffect(()=>{
        getTrailer();
    },[])

    const getTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', TMDB_Options);
        const json = await data.json();
        console.log(json?.results)

        
        const filterVideos = json?.results?.filter((video)=> video.type ==="Trailer")
        // if zero trailer found show 1st video,else show 1st trailer
        const trailer = filterVideos==null? json?.results[0]: filterVideos[0]
        console.log(trailer)
    }

  return (
    <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XeDbyVODQ5M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground