import styled from "styled-components";
import { bgFooter} from "../../variables/ColorVariables";

export const FooterStyled = styled.div`
  ${bgFooter};
 
  display: flex;
  height: 3rem;
  width: 99%;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  align-items: center;  
  bottom: 0 !important;

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
