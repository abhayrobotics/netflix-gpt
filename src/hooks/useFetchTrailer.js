
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";
import { TMDB_Options } from "../utils/constant";



const useFetchTrailer = (id) => {
    const dispatch =useDispatch();

    useEffect(()=>{
        getTrailer();
    },[])

    const getTrailer = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id +'/videos?language=en-US', TMDB_Options);
        const json = await data.json();
        // console.log(json?.results)

        
        const filterVideos = json?.results?.filter((video)=> video.type ==="Trailer")
        // if zero trailer found show 1st video,else show 1st trailer
        const trailer = filterVideos==null? json?.results[0]: filterVideos[0]
        // console.log(trailer)
        dispatch(addTrailer(trailer))

    }

   
}

export default useFetchTrailer