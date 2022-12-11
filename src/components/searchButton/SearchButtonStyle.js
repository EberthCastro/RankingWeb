import styled from "styled-components";
import { bgLight, txtLight } from "../../variables/ColorVariables";
import { FaSearch } from "react-icons/fa";

export const Button = styled.button`
  border: none;
  
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`;
 export const Icon = styled(FaSearch)`
font-size:1.8rem;
${txtLight};


 
 `;