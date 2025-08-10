import { JSX } from "react";
import Topic from "../Topic/Topic";
import TreeStyled from "./TreeStyled";

interface TreeProps {
  title: string;
  topics: string[];
  buttonText: string;
  handleClick: () => void;
  explanations: string[];
}

const Tree: React.FC<TreeProps> = ({
  title,
  topics,
  buttonText,
  handleClick,
  explanations,
}: TreeProps): JSX.Element => {
  return (
    <TreeStyled>
      <h1 className="title">{title}</h1>

      {explanations.map((explanation, index) => (
        <div key={`${index}-${explanation}`}>{explanation}</div>
      ))}

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
