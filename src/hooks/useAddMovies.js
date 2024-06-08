import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_Options } from "../utils/constant";

const useAddMovies =(variable,Url,addMoviesCategory)=>{
    
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        // only calling the api if not loaded already
        if(!variable){

            getMovies();
        }
    },[])

    const getMovies = async ()=>{
        const data = await fetch(Url, TMDB_Options)
        const json = await data.json();

        // console.log(json.results)
        dispatch(addMoviesCategory(json.results))
        
    };
}

export default useAddMovies;

