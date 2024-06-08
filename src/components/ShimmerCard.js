const ShimmerCard = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(
        <div
          className=" flex  flex-col animate-pulse   m-3 pointer border  rounded-xl border-slate-300  min-w-[144px] min-h-[216px]  my-4  rounded-xl shadow-lg bg-slate-100  "
          key={i}
        >
          {/* img */}
          <div className=" h-40  bg-slate-300 rounded-t-xl mb-4"></div>
          {/* description */}
          <div className=" l1 bg-slate-300 w-24 h-5 rounded-lg m-2 "></div>
          {/* <div className=" l1 bg-slate-300 w-24 h-5 rounded-lg m-2"></div> */}
          
        </div>
      );
  
      i++;
    }
    // console.log(array)
  
    return (
      <div className=" flex overflow-x-scroll  __posterScroll m-auto  mt-16 px-4 ">
        {array}
      </div>
    );
  };
  
  export default ShimmerCard;
  