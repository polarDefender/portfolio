import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../constants';
import style from './styles/carousel.module.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={style.slider}>
      <div>
        <img src={projects[0].img} className={style.img} />
      </div>
      <div>
      <img src={projects[7].carousel[0]} className={style.img} />
      </div>
    </Slider>
  );
};

export default Carousel;
