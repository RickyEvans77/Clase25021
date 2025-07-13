import styled from "styled-components";

const Boton = styled.button`
  background-color:rgb(255, 51, 51);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px; 
  &:hover {
    background-color:rgb(255, 0, 0);
  }
  `;

function BotonEstilo({text, onClick}) {
    return <Boton onClick={onClick}>{text}</Boton>;
};

export default BotonEstilo;