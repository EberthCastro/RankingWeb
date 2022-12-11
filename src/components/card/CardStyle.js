import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const App = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  width: 22rem;  
`;

export const Icon = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  /* border: 1px solid; */
  border-radius: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  /* filter: hue-rotate(20deg) brightness(200%); */
  /* filter: hue-rotate(180deg) brightness(70%); */

  .star{
    display: flex;
    align-items: center;
    
    
  }
`;
