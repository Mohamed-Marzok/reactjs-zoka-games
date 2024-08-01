// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import { Pagination, Autoplay } from "swiper/modules";
import { useTheme } from "@emotion/react";

export default function Slider() {
  const theme = useTheme();
  const sliderItems = [
    {
      img: "https://img.freepik.com/premium-photo/gaming-panoramic-banner-composition_23-2151219032.jpg?w=1380",
    },
    {
      img: "https://img.freepik.com/premium-photo/gaming-panoramic-banner-composition_23-2151219021.jpg?w=1380",
    },
    {
      img: "https://img.freepik.com/premium-photo/gaming-panoramic-banner-composition_23-2151218994.jpg?ga=GA1.1.41753884.1706569645&semt=ais_user",
    },
  ];

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      style={{ flexGrow: 1 }}
    >
      {sliderItems.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              position: "relative",
              backgroundColor: theme.palette.primary.contrastText,
            }}
          >
            <img src={item.img} alt="img 1" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
