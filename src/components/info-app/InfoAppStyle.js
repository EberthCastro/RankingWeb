import styled from "styled-components";

const media = {
  mobile: `@media(max-width: 900px)`,
};

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 2rem;
  }
`;

export const IconReturn = styled.div`
  font-size: 8vw;

  .faicon {
    width: 20rem;
    position: absolute;
    left: 0.2px;
    top: 30%;
  }
`;

export const ContainerImgApp = styled.div`
  display: flex;
  justify-content: center;
  width: 99vw;
  gap: 0.2rem;

  img {
    padding: 2rem 0rem 5rem 0rem;
    width: 20%;
  }
`;
export const ContainerDataApp = styled.div`
  /* padding: 0rem 1rem 0rem 0.5rem; */
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  width: 80vw;

  img {
    height: 6rem;
  }
`;
export const CoverSingle = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  display: flex;
  justify-content: space-between;
  gap: 2vw;

  .imgcoversingle {
    padding-top: 1.8vw;
    /* width: 5rem; */

    img {
      width: 15vw;
      height: auto;
    }
  }
`;

export const TitleDataApp = styled.div`
  font-size: 1.8vw;
`;

export const IconEditApp = styled.div`
  font-size: 2rem;
  width: 5rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1.8vw;
`;

export const ClasificationApp = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

export const ContainerInfoApp = styled.div`
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
  width: 80vw;

  ${media.mobile} {
    flex-direction: column-reverse;
  }
`;
export const RatingInfoApp = styled.div`
  width: 25vw;
  h3 {
    font-size: 1.8rem;
  }
  span {
    font-size: 2rem;
    font-weight: bolder;
    text-justify: center;
  }

  ${media.mobile} {
    width: auto;
  }
`;

export const ContainerDataRanking = styled.div``;

export const ContainerText = styled.p`
  margin-top: 6vh;
  width: 60%;
  text-align: justify;
  font-size: 1.2rem;

  ${media.mobile} {
    width: 100%;
  }
`;

export const ContainerDataRankingLinear = styled.div`
  padding: 2rem 0rem 5rem 0rem;
`;
