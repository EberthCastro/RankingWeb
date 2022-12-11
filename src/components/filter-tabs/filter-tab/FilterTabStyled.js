import styled from "styled-components";
import { bgPrimary } from "../../../variables/ColorVariables";

export const FilterTabStyled = styled.button`
  /* border: 1px solid grey; */
  border: none;
  /* padding: 0.2rem 4rem; */
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  height: 5rem;
  width: 25vw;
  font-size: 1rem;
  
  display: flex;
  justify-content: center; 
  align-items: center;
  cursor: pointer;
  :focus {
    ${bgPrimary}
    
    
  }
`;
