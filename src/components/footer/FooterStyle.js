import styled from "styled-components";
import { bgFooter} from "../../variables/ColorVariables";

export const FooterStyled = styled.footer`
  ${bgFooter};
 
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  align-items: center;

  ul{
    display: flex;
    justify-content: center;
  }
  ul li {
    list-style-type: none;
    padding-right: 25px;
    color: white;
  }
  a {
  text-decoration: none;
  color: white;
  }   

`;
