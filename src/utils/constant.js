
// image URL
export const NetflixLogo = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const netflixbackground = "https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg";

export const userAvatar = "https://avatars.githubusercontent.com/u/58120166?v=4";

export const Poster_URL = "https://image.tmdb.org/t/p/w500";

export const now_playing_movies ="https://api.themoviedb.org/3/movie/now_playing";
export const Popular_movies_URL ="https://api.themoviedb.org/3/movie/popular?page=1";
export const top_rated_movies_URL ="https://api.themoviedb.org/3/movie/top_rated?page=1";
export const upcoming_movies_URL ="https://api.themoviedb.org/3/movie/upcoming?page=1";
export const webShows_URL = "https://api.themoviedb.org/3/genre/tv/list"


// APi Contstant

export const TMDB_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_API,
    }
  };
  
//language Constant

export const SupportedLanguages =[
  {identifier:"en", lang:"English"} ,
  {identifier:"hindi", lang:"Hindi"} ,
  {identifier:"spanish", lang:"Spanish"} ,


]

// open Ai constant

