import { numbersData } from "../App";

const Result = () => {
  let sum = 0;
  for (let i = 0; i < numbersData.length; i++) {
    sum += numbersData[i];
  }

  return <>{sum}</>;
};

export default Result;
