
const useAddMovies =()=>{

    
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

export default useAddMovies;

