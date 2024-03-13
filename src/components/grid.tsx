import { numbersData } from "../App";

const Grid = () => {
  return (
    <>
      <div className="grid">
        {numbersData.map((number) => {
          return (
            <>
              <div className="number">{number}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
