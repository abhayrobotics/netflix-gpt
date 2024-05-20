
const TitleContainer = ({title,overview}) => {
  return (
    <div className="pt-96 w-screen aspect-video px-8 absolute bg-gradient-to-r from-black">
        <h2 className="font-bold text-3xl my-2 text-white">{title}</h2>   
        <p className="w-2/5 text-white">{overview}</p>   
        <div className="my-2"> 
            <button className="cursor-pointer px-10 py-1 mr-2 font-semibold bg-white rounded-md bg-opacity-60 hover:bg-opacity-70" >  Play </button>
            <button className="cursor-pointer px-10 py-1 mr-2 font-semibold text-white bg-slate-700 rounded-md bg-opacity-60 hover:bg-opacity-70">More Info</button>
        </div>
     </div>
  )
}

export default TitleContainer