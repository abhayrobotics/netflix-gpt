import React, { useEffect } from "react";
import userLogo from "../assets/user.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch()
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

  // handles chnage in auth state
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid, email, displayName}=user;

        //   dispacth an action using reducer fn()
        dispatch(addUser({uid: uid,email:email,displayName: displayName}));

        // navigating to browse page
        navigate('/browse')
         
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/')

          
        }
      });
},[])
  return (
    <div>
      <div className="  absolute z-20 w-screen py-1 pl-36 px-4 bg-gradient-to-b from-black  flex justify-between ">
        <img
          className="w-[184px]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        {/* header icons show if user is not null */}
        {user && (
          <div className="flex my-auto cursor-pointer " onClick={handleSignOut}>
            <img
              className="w-8 h-8 mx-2 rounded-sm"
              src={ user.photoURL==null ?
                userLogo:
                user.photoURL}
              alt="user icon"
            />
            <div className="font-bold text-lg text-white">Sign Out</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
