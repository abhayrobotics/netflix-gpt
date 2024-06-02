import { useSelector } from "react-redux";
import { netflixbackground } from "../utils/constant";
import { lang } from "../utils/langConstant";

const SearchBar = () => {
  // feteching the language from store
  const choosenLanguage = useSelector(store =>store.config.preferredLanguage)

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
        <form className="flex p-2 ">
          <input className="w-[80%] border-white  px-2 py-1 my-2  mx-2" type="text" placeholder={lang[choosenLanguage].searchPlaceholder} />
          <button className= "  w-[20%] bg-red-700 text-white px-6 py-1 m-2 my-2 rounded-sm">
            {lang[choosenLanguage].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
