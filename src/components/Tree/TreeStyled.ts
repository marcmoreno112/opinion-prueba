import styled from "styled-components";

const TreeStyled = styled.div`
  padding: 20px;
  margin: 50 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  .temas {
    text-align: left; /* Alinear a la izquierda */
    margin-bottom: 0; /* Eliminar margen inferior */
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .list {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export default TreeStyled;
