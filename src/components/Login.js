import { useRef, useState } from "react";
import Header from "./Header";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { ValidateForm } from "../utils/ValidateForm";

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { netflixbackground, userAvatar } from "../utils/constant";

const Login = () => {
  const [signup, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const dispatch =useDispatch();

  //! checking the user request to sign in //sign up and changing accordingly
  const signUpFunction = () => {
    setSignUp(!signup);
   
;  };

  // Email Validation using validateForm function which check the regex

  let name1 = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidate = () => {
    // name is passed as raw as this will be checked only sigup will be clicked
    const error = ValidateForm(
      name1,
      email.current.value,
      password.current.value,
      signup
    );
    // displays the error message
    setErrorMessage(error);
    console.log(errorMessage)
   
    //! if error message then it is true then no authentication to be done
    if (errorMessage) {
      return;
    }
    // else in all case authentication

    if (signup) {
      // signup logic ie create user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          // console.log("sign up success")

          // ! update user data
          updateProfile(user, {
            displayName: name1.current.value,
            photoURL: userAvatar,
          })
            .then(() => {
              const {uid, email, displayName,photoURL}=user;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL})
              );

             
            })
            .catch((error) => {
              // console.log(error)
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessageAuth = error.message;
          setErrorMessage(errorMessageAuth);
          console.log(errorCode + ":- " + errorMessageAuth);
        });
    } else {
      // sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // console.log("sign in success");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessageSignIn = error.message;
          setErrorMessage(errorCode + ": " + errorMessageSignIn);
        });
    }
  };

  return (
    <div className="relative">
      <Header />

      {/* background Image */}
      <div>
        <img
          className="h-screen w-screen object-cover "
          src={netflixbackground}
          alt="backgound"
        />
      </div>

      {/* Login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute top-1/2  -translate-y-[50%]  left-1/2   -translate-x-[50%]  p-16  w-[95%] md:w-3/12 min-w-96 rounded-lg text-white z-10 bg-black  bg-opacity-80 "
      >
        <h2 className="mb-6 text-3xl font-bold">
          {signup === true ? "Sign Up" : "Sign In"}
        </h2>
        {/* if signup true then execute else ignore */}
        {signup && (
          <input
            ref={name1}
            className="w-full my-2 py-2 px-4 rounded-md  bg-slate-900  text-wite border border-slate-600 font-light"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="w-full my-2 py-2 px-4 rounded-md  bg-slate-900  text-wite border border-slate-600 font-light"
          type="text"
          placeholder="Email or mobile number"
        />

        <input
          ref={password}
          className="w-full my-2 py-2 px-4 rounded-md  bg-slate-900  text-wite border border-slate-600 font-light"
          type="password"
          placeholder="Password"
        />

        {/* error message display */}
        <div className="font-semibold text-red-700 ">{errorMessage}</div>
        <button
          className="text-wite w-full bg-red-700 my-2 py-2  rounded"
          onClick={handleValidate}
        >
          {signup === true ? "Sign Up" : "Sign In"}
        </button>
        {signup === true ? (
          <div>
            Already a user?
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={signUpFunction}
            >
              {" "}
              Sign In now
            </span>
          </div>
        ) : (
          <div>
            New to Netflix ?
            <span
              className="font-bold cursor-pointer hover:underline"
              onClick={signUpFunction}
            >
              {" "}
              Sign up now
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
