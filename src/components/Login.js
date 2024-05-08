import Header from "./Header";

const Login =()=>{
    return(
        <div className="relative">
           <Header />

           {/* background Image */}
           <div>
            <img className="min-h-screen object-cover " src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg" alt="backgound" />
           </div>

           {/* Login form */}
            <form className="absolute top-28 left-1/3 p-16  w-3/12 min-w-96  text-white z-10 bg-black  opacity-85 ">

                <h2 className="mb-4 text-3xl font-bold">Sign In</h2>

                <input className="w-full my-2 py-2 px-4 rounded-md  bg-slate-900  text-wite border border-slate-400 font-light" type="text" placeholder="Email or mobile number" />

                <input className="w-full my-2 py-2 px-4 rounded-md  bg-slate-900  text-wite border border-slate-400 font-light"type="password" placeholder="Password" />

                <button className="w-full bg-red-700 my-2 py-2 opacity-100 rounded">Sign In</button>
            </form>

        </div>
    )
}

export default Login;

