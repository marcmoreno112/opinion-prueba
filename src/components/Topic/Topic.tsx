import TopicStyled from "./TopicStyled";

interface TopicProps {
  text: string;
}

const Topic: React.FC<TopicProps> = ({ text }: TopicProps) => {
  return <TopicStyled>{text}</TopicStyled>;
};

export default Topic;
