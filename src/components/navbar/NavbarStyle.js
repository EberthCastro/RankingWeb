import styled from "styled-components";
import { bgDark, bgLight } from "../../variables/ColorVariables";

export const Header = styled.header`
  ${bgDark};
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 1rem 1rem 1em 1rem;
  align-items: center;
  margin-bottom: 2rem;

  .logo {
    width: 15rem;     
  }

  
`;

