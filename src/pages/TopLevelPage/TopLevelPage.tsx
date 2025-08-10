import { JSX } from "react";
import TopLevelPageStyled from "./TopLevelPageStyled";
import Tree from "../../components/Tree/Tree";
import titles from "../../utils/titles";

const TopLevelPage = (): JSX.Element => {
  return (
    <TopLevelPageStyled>
      <h1>{titles.topLevel}</h1>
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
    </TopLevelPageStyled>
  );
};

export default TopLevelPage;
