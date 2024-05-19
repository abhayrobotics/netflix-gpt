import { useEffect } from "react";
import Header from "./Header";
import { TMDB_Options } from "../utils/constant";

const Browse =()=>{

    useEffect(()=>{
        getNowplayingMovies();
    },[])

    const getNowplayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_Options)
        const nowplaying = await data.json();

        console.log(nowplaying.results)

    }
    return(
        <div className="bg-slate-700 h-screen">

        <Header />
        <h1>Browse component</h1>
        </div>
    )

}

export default Browse;