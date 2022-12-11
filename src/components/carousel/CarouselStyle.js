import styled from "styled-components";
import { Swiper } from "swiper/react";

export const SwiperStyle = styled(Swiper)`
  position: relative;
  z-index: 0;
  .img-carousel {
    height: 17vh;
    width: auto;
    margin-left: 2%;
    margin-right: 2%;
    display: inline-block;
  }
  @media (min-width: 768px) {
    .img-carousel {
      height: 30vh;
    }
  }
`;
