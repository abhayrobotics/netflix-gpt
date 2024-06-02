import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_Options } from "../utils/constant";

const useAddMovies =(Url,addMoviesCategory)=>{

    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        getMovies();
    },[])

    const getMovies = async ()=>{
        const data = await fetch(Url, TMDB_Options)
        const json = await data.json();

        // console.log(json.results)
        dispatch(addMoviesCategory(json.results))
        
    };
}

export default useAddMovies;

