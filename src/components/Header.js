import React, { useEffect } from "react";
import userLogo from "../assets/user.png";
import { NetflixLogo, SupportedLanguages } from "../utils/constant";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { toggleGptSearch } from "../utils/searchSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store)=> store.search.gptSearchView)
  const lang = useSelector(store =>store.config.preferredLanguage)
 

  // handles signout
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out success");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  //handle Search
  const handleSearch = ()=>{
    dispatch(toggleGptSearch())
  }

  // handle language change
  const handleLanguageChange =(e)=>{
   
    dispatch(changeLanguage(e.target.value))
   
    // document.getElementById(lang).setAttribute("selected",true)
  } 

  // handles chnage in auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;

        //   dispacth an action using reducer fn()
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // navigating to browse page
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when the component unmounts
    return () => unSubscribe();
  }, []);



  return (
    <div className=" w-svw overflow-x-hidden">
      <div className="  absolute w-screen z-20 py-1 px-16 text-6xl bg-gradient-to-b from-black  flex justify-between flex-col sm:flex-row ">
        <Link to="/"><img className="w-[184px] mx-auto sm:mx-0" src={NetflixLogo} alt="logo" /></Link>

        {/* header icons show if user is not null */}
        {user && (
          <div className="flex  justify-between  ">
            
            {/* show multi language only for gpt search page */}
            
            {gptSearchView &&(
              <select className="  sm:text-sm h-fit p-1 my-auto mx-auto sm:mx-2 bg-black text-white " onChange={handleLanguageChange}>  
              {SupportedLanguages?.map((item)=> <option id={item.identifier} value={item.identifier} key={item.identifier}>{item.lang}</option> )}
            </select>
            )
            }


            <button  onClick={handleSearch} className="cursor-pointer px-6 py-1 my-auto mr-6 text-sm sm:text-base font-semibold border border-1 text-white  rounded-lg">
              {gptSearchView?"Home":"AI Search"} </button>
            <div
              className="flex my-auto cursor-pointer "
              onClick={handleSignOut}
            >
              <img
                className="w-8 h-8 mx-2 rounded-sm hidden sm:inline-block"
                src={user.photoURL == null ? userLogo : user.photoURL}
                alt="user icon"
              />
              <div className="font-semibold my-auto text-sm sm:text-lg text-white pr-8">Sign Out</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
