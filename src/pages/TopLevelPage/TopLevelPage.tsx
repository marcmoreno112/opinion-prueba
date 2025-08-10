import { JSX } from "react";
import TopLevelPageStyled from "./TopLevelPageStyled";
import Tree from "../../components/Tree/Tree";
import titles from "../../utils/titles";

const TopLevelPage = (): JSX.Element => {
  const explanations: string[] = [
    "Qué es el voto...",
    "Cómo funciona la norma actual",
    "Qué se propone con el cambio",
  ];

  return (
    <TopLevelPageStyled>
      <h1 className="title">{titles.topLevel}</h1>
      <Tree
        title="Voto a los 16 años en elecciones generales"
        topics={[
          "Interés en la política de quien vota",
          "Influencia en los políticos",
          "Capacidad para votar",
        ]}
        buttonText="Empezar"
        handleClick={() => {}}
        explanations={explanations}
      />
    </TopLevelPageStyled>
  );
};

export default TopLevelPage;
