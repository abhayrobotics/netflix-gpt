import { useSelector } from "react-redux";
import { netflixbackground } from "../utils/constant";
import { lang } from "../utils/langConstant";
import { useRef } from "react";
import  {openai}  from "../utils/openai";
import { model } from "../utils/geminiai";

const SearchBar = () => {
  const searchText = useRef(null);
  // feteching the language from store
  const choosenLanguage = useSelector(
    (store) => store.config.preferredLanguage
  );

  // search button function
  const handleSearchRequest = async () => {
    console.log(searchText.current.value);

    const prompt =
      "Acting as Movie Recommentation system, giveme 5 results based on query: " +
      searchText.current.value +
      ". give the results in semicolon separated. Example results: sholay; udaan; loki; hungama; kites";
    
    //   const completion = await openai.chat.completions.create({
    //     messages: [{ role: "system", content: GPTquery }],
    //     model: "gpt-3.5-turbo",
    //   });

    //   console.log(completion.choices);

    const result = await model.generateContent(prompt)
    const response = await result.response;
    const text = response.text();
    console.log(text);

  
  };
  return (
    <div>
      {/* background Image */}
      <div className="-z-10 absolute top-0">
        <img
          className="min-h-screen object-cover "
          src={netflixbackground}
          alt="backgound"
        />
      </div>
      <div className="bg-black mt-[10%]  w-1/2 mx-auto   ">
        <form className="flex p-2 " onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchText}
            className="w-[80%] border-white  px-2 py-1 my-2  mx-2"
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
