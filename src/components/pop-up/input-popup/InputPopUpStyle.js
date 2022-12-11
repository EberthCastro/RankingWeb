import styled from "styled-components";
import {
  txtLight,
  bgPrimary,
  bgSecondary,
  secondary,
  txtDark,
  txtSecondary,
} from "../../../variables/ColorVariables";

export const InputPopUpStyled = styled.input`
  border: 2px solid ${secondary};
  border-radius: 0.5rem;
  padding: 0.3rem;
  width: 85%;
  font-size:1.1rem;
  margin-top: 0.5rem;
  ${txtSecondary};
  @media (min-width: 560px){
    width: 80%;
  }
  ::placeholder {
    ${txtSecondary}

  }
`;
