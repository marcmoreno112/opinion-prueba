import { JSX } from "react";
import Topic from "../Topic/Topic";
import TreeStyled from "./TreeStyled";

interface TreeProps {
  title: string;
  topics: string[];
  buttonText: string;
  handleClick: () => void;
}

const Tree: React.FC<TreeProps> = ({
  title,
  topics,
  buttonText,
  handleClick,
}: TreeProps): JSX.Element => {
  return (
    <TreeStyled>
      <h1>{title}</h1>

      <div>Qué es el voto...</div>
      <div>Cómo funciona la norma actual</div>
      <div>Qué se propone con el cambio</div>

      <button onClick={handleClick}>{buttonText}</button>

      <div>
        <h3 className="temas">Temas</h3>
        <div className="list">
          {topics.map((topic, index) => (
            <Topic key={`${index}-${topic}`} text={topic} />
          ))}
        </div>
      </div>
    </TreeStyled>
  );
};

export default Tree;
