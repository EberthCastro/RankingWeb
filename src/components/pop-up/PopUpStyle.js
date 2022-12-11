import styled from "styled-components";
import {
  bgLight,
  bgSecondary,
  txtLight,
  txtSecondary,
} from "../../variables/ColorVariables";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;
  width: 80%;
  height: 25%;
  ${bgLight};
  position: relative;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  z-index: 99;
  @media (min-width: 560px) {
    max-width: 65%;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  @media (min-width: 560px) {
    gap: 8rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.4rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 2%;
  display: flex;
  align-content: center;
  justify-content: center;
  ${txtSecondary};
  font-size: 1.5rem;
  &:hover {
    ${bgSecondary};
    ${txtLight}
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${txtSecondary};
  font-weight: 500;
  font-size: 1.1;
`;

export const ToggleButtonsTops = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  ${txtSecondary};
  font-size: 1rem;
  font-weight: 600;
`;

export const ToggleButtonsType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  ${txtSecondary};
  font-size: 1rem;
  font-weight: 600;
`;
