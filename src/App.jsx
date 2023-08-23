import "./App.css";
import { ShowUsers } from "./components/ShowUsers/ShowUsers";
import { Timer } from "./components/Timer/Timer";
import { Validation } from "./components/Validation/Validation";

function App() {

  // Et komponent hvor vi bruger useEffect til at lave en form validering

  // Et komponent hvor vi henter og viser noget data fra et api med useEffect

  return (
    <>
     {/*  <ShowUsers/> */}
      {/* <Validation/> */}
      <Timer/>
    </>
  );
}

export default App;
