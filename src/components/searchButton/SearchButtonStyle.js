import styled from "styled-components";
import { bgLight, txtLight } from "../../variables/ColorVariables";
import { FaSearch } from "react-icons/fa";

export const Button = styled.button`
  border: none;
  width: auto;
  background: none;
  cursor: pointer;
`;
export const Icon = styled(FaSearch)`
  font-size: 2rem;
  ${txtLight};
`;
