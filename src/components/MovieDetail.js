import React from "react";
import { PosterFull_URL, Poster_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toogleBtn } from "../utils/configSlice";

const MovieDetail = () => {
  const movie_Details = useSelector((store) => store?.movies?.movieDetails);
  const dispatch = useDispatch()

  const close = useSelector(store=>store?.config?.closeBtn) 
  const closeButton =()=>{
    dispatch(toogleBtn(false))
  }
  return (
    close && <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 z-40 ">
   
      <div className="fixed  top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] max-w-[70%] h-fit overflow-hidden object-fill m-auto z-50 rounded-xl ">
        <div className="relative">
          <div className="absolute w-6 top-2  cursor-pointer bg-white p-1.5 rounded-xl right-2 hover:bg-red-600" onClick={closeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          {
            <img
              className="rounded-md  "
              src={PosterFull_URL + movie_Details?.backdrop_path}
              alt="movie Poster"
            />
          }
          {
            <div className="bg-slate-200 text-black">
              <h2 className="text-xl px-2 py-1 ">
                Title: {movie_Details?.title}
              </h2>
              <h2 className="text-sm  px-2 py-1 overflow-hidden max-h-[121px]">
                {movie_Details?.overview}...
              </h2>
              <h2 className="text-md px-2  py-1">
                Release: {movie_Details?.release_date}
              </h2>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
