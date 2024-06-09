import { useDispatch, useSelector } from "react-redux";
import {
  Search_URL,
  Search_URL_postfix,
  TMDB_Options,
  netflixbackground,
} from "../utils/constant";
import { lang } from "../utils/langConstant";
import { useRef } from "react";

import { model } from "../utils/geminiai";
import { addQueryResult, addTmdbResult } from "../utils/queryResultSlice";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  
  // feteching the language from store
  const choosenLanguage = useSelector(
    (store) => store.config.preferredLanguage
  );

  // search button function
  const handleSearchRequest = async () => {
    // console.log(searchText.current.value);

    // improving promt to get desired format output
    const prompt =
      "Acting as Movie Recommentation system with a name of -AI, give me 10 results or exact result based on query: " +
      searchText.current.value +
      ". give the results in semicolon separated in one line, not semicolon after last movie name. Example results: sholay; udaan;loki;hungama;kites;apple;ball;bat;cat;Dog";

    // calling the Gemini ai model
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    try {
      // console.log(text);
      const movieArray = text.split("; ");
      movieArray[4] = movieArray[4].split(" \n")[0];
      // console.log(movieArray);

      // dispatch an action using a reducer of query
      dispatch(addQueryResult(movieArray));

      movieArray?.map((movieSeaarchResult) => {
        // searching item in tmdb
        const handleSearch = async () => {
          const URL1 = Search_URL + movieSeaarchResult + Search_URL_postfix;
          // console.log(URL1);
          const searchResult = await fetch(URL1, TMDB_Options);
          const json = await searchResult.json();
          // console.log(json.results[0]);
          dispatch(addTmdbResult(json.results[0]))
      
        };
      handleSearch()
      });

    } catch (error) {
      console.log(text);
    }
  };

  return (
    <div>
      {/* background Image */}
      <div className="-z-10 fixed top-0">
        <img
          className="min-h-screen w-[100svw] object-cover "
          src={netflixbackground}
          alt="backgound"
        />
      </div>
      <div className="bg-black mt-[40%] sm:mt-[10%]  w-[95%] sm:w-2/3 mx-auto   rounded-md ">
        <form className="flex p-2 " onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            className="w-[80%] border-white  px-2 py-1 my-2  mx-2 rounded-sm"
            type="text"
            placeholder={lang[choosenLanguage].searchPlaceholder}
          />
          <button
            className="  w-[20%] bg-red-700 text-white px-6 py-1 m-2 my-2 rounded-sm"
            onClick={handleSearchRequest}
          >
            {lang[choosenLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
