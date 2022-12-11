import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { SwiperStyle } from "./CarouselStyle";



function Carousel({bestAppsList}) {
  return (
    <>
      <SwiperStyle
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        autoplay={true}
        speed={7}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {bestAppsList.slice(0, 10).map((app) => {
          return (
            <SwiperSlide>
              <center>
                <img class="img-carousel" src={app.photos[0]} alt={app.name} />
                <img class="img-carousel" src={app.photos[1]} alt={app.name} />
                <img class="img-carousel" src={app.photos[2]} alt={app.name} />
              </center>
            </SwiperSlide>
          );
        })}
      </SwiperStyle>
    </>
  );
}

export default Carousel
