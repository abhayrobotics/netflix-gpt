
const TitleContainer = ({title,overview}) => {
  return (
    <div className="py-72 lg:pt-96 w-svw aspect-video  pl-8 sm:pl-20 absolute bg-gradient-to-r z-0 from-black">
        <h2 className="  lg:__animateTitle text-2xl md:text3xl  font-bold   duration-1000  my-2 text-white">{title}</h2>   
        <p className="hidden md:block w-3/5 lg:w-2/5  text-white">{overview}</p>   
        <div className="my-2"> 
        
            <button className="  cursor-pointer px-10 py-1 mr-2 font-semibold bg-white rounded-md bg-opacity-60 hover:bg-opacity-70" >  Play </button>
            <button className=" hidden md:inline-block cursor-pointer px-10 py-1 mr-2 font-semibold text-white bg-slate-700 rounded-md bg-opacity-60 hover:bg-opacity-70">More Info</button>
        </div>
     </div>
  )
}

export default TitleContainer