import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slidergame.css";
import { Box, Typography } from "@mui/material";

export default function SliderGame({ game }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${game?.screenshots[i].image}`} alt={`thumb${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {game?.screenshots.map((screenshot) => (
          <div key={screenshot.id}>
            <img src={screenshot.image} alt={`slide${screenshot.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
