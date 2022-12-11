import styled from "styled-components";
import { bgPrimary } from "../../variables/ColorVariables";

export const FormContainer = styled.form`
  
  width: 80vw;
  
  button{
    border: none;
    padding: 0.2rem 4rem;
    border-radius: 0.8rem;
    height: 2rem;
    width: 7rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2670E0;
    color: aliceblue;
  /* &:hover{
    ${bgPrimary}
  } */
  }
`;
export const FormInput = styled.div`
  margin-bottom: 1.5rem;
  padding: 3px;
  /* margin: 2px; */
  height: ${(props) => props.Height};
 
  /* background-color: #A0A1A4; */
  border-radius: 0.8rem;
  
`;

export const Input = styled.input`
  /* padding: 1rem; */
  width: 96.7%;
  outline: none;
  height: ${(props) => props.HeightInput};
  border: #A0A1A4 1px solid;  
  padding: 1rem ;
  background-color: #ffffff;
  /* -webkit-text-fill-color: #A0A1A4; */
  border-radius: 0.8rem;
`;
