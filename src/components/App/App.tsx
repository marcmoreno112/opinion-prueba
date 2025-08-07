import { JSX } from "react";
import Tree from "../Tree/Tree";

const App = (): JSX.Element => {
  return (
    <Tree
      title="Voto a los 16 años en elecciones generales"
      topics={[
        "Interés en la política de quien vota",
        "Influencia en los políticos",
        "Capacidad para votar",
      ]}
      buttonText="Empezar"
      handleClick={() => {}}
    />
  );
};

export default App;
