import styled from "styled-components";


export const App = styled.div`
  display: flex;
  flex-wrap: wrap;   
  width: 25rem;
  padding: 0.5rem;
  margin: 0.5rem;  
  gap: 2rem;
  
`;

export const Icon = styled.img`
  width: 8.5rem;
  height: 8.5rem;
  /* border: 1px solid; */
  border-radius: 1rem;
  background-color: black;
`;

export const TextContainer = styled.div`
  display: flex;  
  flex-direction: column;  
  padding: 0.5rem;
  gap: 2rem;
  font-weight: bold;
 
  .star{
    font-size: 1.2rem;
    display: flex;
    align-items: center;     
  }
`;
