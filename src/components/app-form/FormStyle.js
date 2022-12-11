import styled from "styled-components";

const media = {
  desktop: `@media(max-width: 900px)`,
};

export const Container = styled.div`
  padding-left: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;

  .app {
    width: 6rem;
    height: 6rem;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .contbutton {
    display: flex;
    gap: 1vw;

    .button {
      border: none;
      padding: 0.2rem 4rem;
      border-radius: 0.8rem;
      height: 2rem;
      width: 7rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2670e0;
      color: #ffffff;
    }
  }

  ${media.desktop} {
    /* display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            gap: 5vw;
            width: 10vw; */
  }
`;

export const ContainerImgForm = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 1vh;
  border-radius: 12.5px;
  margin: 0vh 0vw 5vh 0vw;
  height: 20vh;
  width: 20vw;
  ${media.desktop} {
    height: 20vh;
    width: 80vw;
  }
`;

export const ContainerDataForm = styled.div``;

export const ContainerNameAppForm = styled.div`
  padding: 0vh 0vw 2vh 0vw;
  input {
    background: #c2c3c6;
    border-radius: 12.5px;
    border-style: none;
    height: 5vh;
    width: 20vw;
    ${media.desktop} {
      width: 60vw;
    }
  }
`;

export const ContainerTypeAppForm = styled.div`
  padding: 0vh 0vw 2vh 0vw;
  label {
    padding: 0vh 3vw 0vh 0vw;
  }
`;

export const ContainerAboutAppForm = styled.div`
  padding: 0vh 0vw 5vh 0vw;
  input {
    background: #c2c3c6;
    border-radius: 12.5px;
    border-style: none;
    height: 15vh;
    width: 80vw;
    
    ${media.desktop} {
      width: 40vw;
    }
  }
`;
