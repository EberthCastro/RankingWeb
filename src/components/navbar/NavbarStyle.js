import styled from "styled-components";
import { bgDark, bgLight } from "../../variables/ColorVariables";

export const Header = styled.header`
  ${bgDark};
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: space-between;
  padding: 1rem 2rem 1em 1rem;
  align-items: center;
  margin-bottom: 5rem;

  .logo {
    width: 10rem;
    display: flex;
    align-items: center;
    margin-left: 2.5vw;
    
  }

  
`;

