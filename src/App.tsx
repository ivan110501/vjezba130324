import Grid from "./components/grid";
import Result from "./components/result";
import "./styles/style.scss";

export const numbersData: number[] = [
  1, 3, 6, 234, 67, 12, 34, 90, 56, 87, 39, 17, 1, 2,
];

function App() {
  return (
    <>
      <div>
        <b>Niz</b>
        <hr />
      </div>
      <Grid />
      <br />

      <div>
        <b>Rezultat</b>
        <hr />
        <div className="result">{<Result />} </div>
      </div>
    </>
  );
}

export default App;
