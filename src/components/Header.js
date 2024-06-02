import React, { useEffect } from "react";
import userLogo from "../assets/user.png";
import { NetflixLogo, SupportedLanguages } from "../utils/constant";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { toggleGptSearch } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);

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
      <div className="  absolute w-screen z-20 py-1 px-16 text-6xl bg-gradient-to-b from-black  flex justify-between ">
        <img className="w-[184px]" src={NetflixLogo} alt="logo" />

        {/* header icons show if user is not null */}
        {user && (
          <div className="flex">

            {/* multi language */}
            <select className=" text-sm h-fit p-1 my-auto mx-2 bg-black text-white">  
              {SupportedLanguages?.map((item)=> <option className="" value={item.identifier}>{item.lang}</option> )}
            </select>


            <button  onClick={handleSearch} className="cursor-pointer px-6 py-1 my-auto mr-6 text-base text-white bg-green-700 rounded-lg">GPT Search </button>
            <div
              className="flex my-auto cursor-pointer "
              onClick={handleSignOut}
            >
              <img
                className="w-8 h-8 mx-2 rounded-sm"
                src={user.photoURL == null ? userLogo : user.photoURL}
                alt="user icon"
              />
              <div className="font-bold text-lg text-white pr-8">Sign Out</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
