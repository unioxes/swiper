import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation'


// import required modules
import { Pagination,Navigation,A11y,Scrollbar, Mousewheel } from 'swiper/modules';
import Header from './header/header';
import Firm from './our_firm/firm';
import Reed from './reeding_house/reed';
import Process from './process/prosecc';
import Staircase from './staircase/staircase';
import Swirling from './swirling_staircase/swirling';
import Projects from './featured_projects/projects';
import Team from './team/team';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        // pagination={{clickable: true}}
        mousewheel={true}
        modules={[Pagination,Navigation,A11y,Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide><Header/></SwiperSlide>
        <SwiperSlide><Firm/></SwiperSlide>
        <SwiperSlide><Reed/></SwiperSlide>
        <SwiperSlide><Process/></SwiperSlide>
        <SwiperSlide><Staircase/></SwiperSlide>
        <SwiperSlide><Swirling/></SwiperSlide>
        <SwiperSlide><Projects/></SwiperSlide>
        <SwiperSlide><Team/></SwiperSlide>
      </Swiper>
    </>
  );
}
