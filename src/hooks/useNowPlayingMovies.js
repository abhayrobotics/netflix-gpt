import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { Popular_movies, TMDB_Options } from "../utils/constant";
import { useEffect } from "react";


const useNowPlayingMovies =()=>{

    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        getNowplayingMovies();
    },[])

    const getNowplayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_Options)
        const nowplaying = await data.json();

        // console.log(nowplaying.results)
        dispatch(addNowPlayingMovies(nowplaying.results))
        
    };
}

export default useNowPlayingMovies;


export const useAddMovies =()=>{

    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        getMovies();
    },[])

    const getMovies = async (Url)=>{
        const data = await fetch(Url, TMDB_Options)
        const json = await data.json();

        // console.log(nowplaying.results)
        dispatch(addNowPlayingMovies(json.results))
        
    };
}

