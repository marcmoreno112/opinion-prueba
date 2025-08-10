import { styled } from "styled-components";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  color: ${(props) => props.theme.colors.secondary};
`;

export default LayoutStyled;
