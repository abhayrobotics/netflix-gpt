import { useSelector } from "react-redux";

const GeminiTextresult = () => {
  const textResult = useSelector((store) => store.query.queryResult);
  console.log(textResult);

  



  return (
    <div>
      <h2 className="text-white text-2xl">Recommended Movies :</h2>
      <div className="pl-4">
        {textResult?.map((key, value) => {
          return (
            <h2 className="text-white text-lg" key={value}>
              {value + 1}. {key}
            </h2>
          );
        })}
      </div>
    </div>
  );
};

export default GeminiTextresult;
